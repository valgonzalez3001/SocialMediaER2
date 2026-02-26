import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useStats } from "../../contexts/StatsProvider.jsx";
import { usePosts } from "../../contexts/PostsProvider.jsx";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";
import { IoMdClose } from "../../utils/icons.jsx";
import statementsData from "./CommunityNoteStatements.json";
import "./CommunityNote.css";

export const CommunityNote = ({ setIsCreateNewPostClicked, className = "modal-content" }) => {
  const { t } = useTranslation();
  const currentLang = t("langKey");
  const { completeChallengeFinal } = useStats();
  const { createPost } = usePosts();
  const { loggedInUserState } = useLoggedInUser();
  const navigate = useNavigate();
  const [selectedStatements, setSelectedStatements] = useState([]);

  const statements = useMemo(
    () => statementsData[currentLang] || statementsData.en || [],
    [currentLang]
  );

  const handleStatementClick = (id) => {
    setSelectedStatements((prev) => {
      const isSelected = prev.includes(id);
      if (isSelected) {
        return prev.filter((statementId) => statementId !== id);
      }
      if (prev.length < 2) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const handleSubmit = () => {
    if (selectedStatements.length !== 2) {
      toast.error(t("createPost.selectTwoStatements"));
      return;
    }

    const correctSelections = selectedStatements.every((id) => {
      const statement = statements.find((s) => s.id === id);
      return statement.correct;
    });

    if (!correctSelections) {
      toast.error(t("createPost.incorrectSelection"));
      setSelectedStatements([]);
      return;
    }

    const conclusionPost = {
      firstName: loggedInUserState?.firstName,
      lastName: loggedInUserState?.lastName,
      content: t("createPost.conclusionText"),
      mediaUrl: "",
      isCommunityNote: true,
      avatarURL: "/assets/echo-logo-bg.png",
    };

    createPost(new Event("submit"), conclusionPost, "admin-token");
    completeChallengeFinal();
    setIsCreateNewPostClicked && setIsCreateNewPostClicked(false);
    navigate(`/profile/${loggedInUserState?.username || "Katherine"}`);
  };

  return (
    <form className={`new-post-container conclusion-challenge-form ${className}`} onSubmit={(e) => e.preventDefault()}>
      <div
        onClick={() => navigate(`/profile/${loggedInUserState?.username}`)}
        className="img-container"
      >
        <img
          src={loggedInUserState.avatarURL}
          alt={loggedInUserState.firstName}
        />
      </div>

      <div className="input-container">
        {setIsCreateNewPostClicked && (
          <IoMdClose
            onClick={() => setIsCreateNewPostClicked(false)}
            className="close-create-post-modal challenge-close-btn"
          />
        )}
        <div className="challenge-content">
          <p className="challenge-description">{t("createPost.selectTwoCorrect")}</p>

          <div className="statements-list">
            {statements.map((statement) => (
              <div
                key={statement.id}
                className={`statement-option ${
                  selectedStatements.includes(statement.id) ? "selected" : ""
                }`}
                onClick={() => handleStatementClick(statement.id)}
              >
                <div className="statement-check">
                  {selectedStatements.includes(statement.id) && (
                    <span className="check">✓</span>
                  )}
                </div>
                <p className="statement-text">{statement.text}</p>
              </div>
            ))}
          </div>

          <div className="post-btn-container">
            <button
              onClick={handleSubmit}
              disabled={selectedStatements.length !== 2}
              type="button"
            >
              {t("createPost.publishConclusion")}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
