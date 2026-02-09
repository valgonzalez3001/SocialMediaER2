import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useStats } from "../../contexts/StatsProvider.jsx";
import { usePosts } from "../../contexts/PostsProvider.jsx";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";
import "./ConclusionChallenge.css";

/**
 * Reto final: El jugador debe seleccionar 2 frases correctas de 5 opciones
 * para aprender sobre desinformación
 */
export const ConclusionChallenge = () => {
  const { t } = useTranslation();
  const { completeChallengeFinal } = useStats();
  const { createPost } = usePosts();
  const { loggedInUserState } = useLoggedInUser();
  const navigate = useNavigate();
  
  const [selectedStatements, setSelectedStatements] = useState([]);

  // Definir las frases con sus estados (correctas/incorrectas)
  const statements = [
    {
      id: 1,
      text: t('createPost.statement1'),
      correct: true,
    },
    {
      id: 2,
      text: t('createPost.statement2'),
      correct: false,
    },
    {
      id: 3,
      text: t('createPost.statement3'),
      correct: true,
    },
    {
      id: 4,
      text: t('createPost.statement4'),
      correct: false,
    },
    {
      id: 5,
      text: t('createPost.statement5'),
      correct: false,
    },
  ];

  const handleStatementClick = (id) => {
    setSelectedStatements((prev) => {
      const isSelected = prev.includes(id);
      if (isSelected) {
        return prev.filter((statementId) => statementId !== id);
      } else {
        if (prev.length < 2) {
          return [...prev, id];
        }
        return prev;
      }
    });
  };

  const handleSubmit = () => {
    // Validar que se seleccionaron exactamente 2 frases
    if (selectedStatements.length !== 2) {
      toast.error(t('createPost.selectTwoStatements'));
      return;
    }

    // Validar que las 2 frases seleccionadas son correctas
    const correctSelections = selectedStatements.every((id) => {
      const statement = statements.find((s) => s.id === id);
      return statement.correct;
    });

    if (!correctSelections) {
      toast.error(t('createPost.incorrectSelection'));
      setSelectedStatements([]);
      return;
    }

    // Si todo es correcto, crear el post de conclusiones y marcar reto como completado
    const conclusionPost = {
      firstName: loggedInUserState?.firstName,
      lastName: loggedInUserState?.lastName,
      content: t('createPost.conclusionText'),
      mediaUrl: "",
      isCommunityNote: true,
    };

    createPost(new Event("submit"), conclusionPost, "admin-token");
    completeChallengeFinal();
  };

  return (
    <form className="new-post-container conclusion-challenge-form" onSubmit={(e) => e.preventDefault()}>
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
        <div className="challenge-content">
          <p className="challenge-description">{t('createPost.selectTwoCorrect')}</p>

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
              {t('createPost.publishConclusion')}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
