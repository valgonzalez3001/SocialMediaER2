import "./Comment.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { useTranslation } from 'react-i18next';
import { getLocalizedContent } from '../../../../utils/i18nHelpers.jsx';

import { usePosts } from "../../../../contexts/PostsProvider.jsx";
import { useLoggedInUser } from "../../../../contexts/LoggedInUserProvider.jsx";
import { useUser } from "../../../../contexts/UserProvider.jsx";

export const Comment = ({ comment, post }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { userState } = useUser();
  const { _id, avatarURL, username, firstName, lastName, text } =
    comment;
  const { deleteComment, editComment } = usePosts();
  const [showCommentToolbar, setShowCommentToolbar] = useState(false);

  const [isEditComment, setIsEditComment] = useState(false);
  const { loggedInUserState } = useLoggedInUser();
  const isAdmin = loggedInUserState.isAdmin;

  const normalizeText = (value) => {
    if (value === null || value === undefined) return "";
    if (typeof value === "string") return value;
    if (typeof value === "number" || typeof value === "boolean") return String(value);
    if (Array.isArray(value)) {
      return value
        .map((item) => normalizeText(item))
        .filter(Boolean)
        .join(" ")
        .trim();
    }
    if (typeof value === "object") {
      if (value.text !== undefined) return normalizeText(value.text);
      if (value.richText !== undefined) return normalizeText(value.richText);
      if (value.hyperlink !== undefined) return normalizeText(value.hyperlink);
      return "";
    }
    return "";
  };

  const [userComment, setUserComment] = useState({ text: text });

  const normalizedUsername = normalizeText(username).replace(/^@/, "").trim();
  const userDetails = userState?.allUsers?.find(
    (user) => (user?.username || "").replace(/^@/, "") === normalizedUsername
  );
  const displayUsername = normalizedUsername ? `@${normalizedUsername}` : "";
  const displayAvatar = userDetails?.avatarURL || normalizeText(avatarURL) || "/assets/users/TechAlex.png";
  const displayName = `${firstName || ""} ${lastName || ""}`.trim() || displayUsername;
  const displayComment = getLocalizedContent(text, i18n.language) || normalizeText(text) || "...";

  return (
    <div className="comment-card">
      <div>
        <img
          className="comment-user-image"
          src={displayAvatar}
          alt={displayName || "User"}
        />
      </div>

      <div className="comment-main-section">
        <div className="username-container">
          <p className="name">
            {displayName}
          </p>
          <span
            className="username"
          >
            {displayUsername}
          </span>{" "}
          {/* El admin puede borrar cualquier comentario, pero solo editar el propio */}
          {isAdmin && (
            <div className="comment-toolbar">
              <div
                className="edit"
                onClick={() => setShowCommentToolbar(!showCommentToolbar)}
              >
                <RxDotsHorizontal className="three-dots-icon" />
              </div>
              {showCommentToolbar && (
                <div className="comment-toolbar-menu-container">
                  {/* Solo mostrar Edit si es el dueño del comentario */}
                  {loggedInUserState.username === username && (
                    <p
                      onClick={() => {
                        setIsEditComment(true);
                        setShowCommentToolbar(false);
                      }}
                    >
                      {t('comments.edit')}
                    </p>
                  )}
                  {/* Admin siempre puede borrar */}
                  <p
                    onClick={() => {
                      deleteComment(post?._id, _id, "admin-token");
                    }}
                  >
                    {t('comments.delete')}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {!isEditComment ? (
          <div className="user-comment">{displayComment}</div>
        ) : (
          <div className="edit-comment-container">
            <textarea
              onChange={(e) => setUserComment({ text: e.target.value })}
              value={userComment.text}
            />
            <button
              onClick={() => {
                editComment(post._id, _id, userComment, "admin-token");
                setIsEditComment(false);
              }}
            >
              {t('comments.save')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
