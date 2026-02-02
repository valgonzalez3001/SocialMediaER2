import "./Comment.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { useTranslation } from 'react-i18next';
import { getLocalizedContent } from '../../../../utils/i18nHelpers.jsx';

import { usePosts } from "../../../../contexts/PostsProvider.jsx";
import { useLoggedInUser } from "../../../../contexts/LoggedInUserProvider.jsx";
import { useUser } from "../../../../contexts/UserProvider.jsx";
import { getTimeDifference } from "../../../../utils/date.jsx";

export const Comment = ({ comment, post }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { userState } = useUser();
  const { _id, avatarURL, username, firstName, lastName, text, createdAt } =
    comment;
  const { deleteComment, editComment } = usePosts();
  const [showCommentToolbar, setShowCommentToolbar] = useState(false);

  const [isEditComment, setIsEditComment] = useState(false);
  const { loggedInUserState } = useLoggedInUser();
  const isAdmin = loggedInUserState.isAdmin;

  const [userComment, setUserComment] = useState({ text: text });

  const userDetails = userState?.allUsers?.find(
    (user) => user?.username === username
  );

  return (
    <div className="comment-card">
      <div>
        <img
          className="comment-user-image"
          src={userDetails?.avatarURL}
          alt={userDetails?.firstName}
        />
      </div>

      <div className="comment-main-section">
        <div className="username-container">
          <p className="name">
            {firstName} {lastName}
          </p>
          <span
            className="username"
          >
            @{username}
          </span>{" "}
          <span className="date"> {getTimeDifference(createdAt)}</span>
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
          <div className="user-comment">{getLocalizedContent(text, i18n.language)}</div>
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
