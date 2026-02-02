import "./Post.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AttentionSeeker, Slide } from "react-awesome-reveal";
import { toast } from "react-hot-toast";
import { useTranslation } from 'react-i18next';
import { getLocalizedContent } from '../../utils/i18nHelpers.jsx';

import {
  RiHeart3Fill,
  RiHeart3Line,
  FaRegComment,
  RxDotsHorizontal,
  RxCross2,
} from "../../utils/icons.jsx";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";
import { usePosts } from "../../contexts/PostsProvider.jsx";
import { EditPostForm } from "../EditPostForm/EditPostForm";
import { useUser } from "../../contexts/UserProvider.jsx";
import { Comment } from "./components/Comment/Comment";
import { getTimeDifference } from "../../utils/date.jsx";

export const Post = ({ post }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isEditPostClicked, setIsEditPostClicked] = useState(false);
  const [actionMenu, setActionMenu] = useState(false);
  const { likePost, dislikePost, deletePost } = usePosts();
  const [commentData, setCommentData] = useState({ text: "" });
  const [showComments, setShowComments] = useState(false);
  const { loggedInUserState } = useLoggedInUser();
  const { addComment } = usePosts();
  const { userState } = useUser();

  const userDetails = userState?.allUsers?.find(
    (user) => user?.username === post?.username
  );

  // El admin es el único usuario, puede hacer todo
  const isAdmin = loggedInUserState.isAdmin;

  const copyHandler = (link) => {
    navigator.clipboard.writeText(link);
    toast.success(t('post.linkCopied'));
  };

  return (
    <div className="post-card">
      <div className="profile-picture-container">
        <img
          onClick={() => {
            navigate(`/profile/${post?.username}`);
          }}
          src={userDetails?.avatarURL}
          alt={userDetails?.firstName}
        />{" "}
      </div>

      <div className="post-card-content">
        <div className="name-container">
          <div
            onClick={() => {
              navigate(`/profile/${post?.username}`);
            }}
            className="username-container"
          >
            <span
              onClick={() => {
                navigate(`/profile/${post?.username}`);
              }}
              className="name"
            >
              {post?.firstName} {post?.lastName}
              {userDetails?.verified === true && (
                <img
                  src="/assets/verified_badge.png"
                  alt={t('post.verifiedAccount')}
                  className="verified-badge"
                  title={t('post.verifiedAccount')}
                />
              )}


            </span>{" "}
            <span
              onClick={() => {
                navigate(`/profile/${post?.username}`);
              }}
              className="username"
            >
              {" "}
              {`@${post?.username}`}
            </span>
            {"  "}
            <span
              onClick={() => {
                navigate(`/profile/${post?.username}`);
              }}
              className="date"
            >
              {getTimeDifference(post?.createdAt)}
            </span>
            {/* El admin siempre puede editar/borrar cualquier post */}
            {isAdmin && (
              <div
                className="edit"
                onClick={(e) => {
                  e.stopPropagation();
                  setActionMenu(!actionMenu);
                }}
              >
                <RxDotsHorizontal className="three-dots-icon" />
              </div>
            )}
            {actionMenu && (
              <div className="action-menu-container">
                <AttentionSeeker effect="headShake">
                  {/* Solo mostrar Edit si es el dueño del post */}
                  {loggedInUserState.username === post?.username && (
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEditPostClicked(!isEditPostClicked);
                        setActionMenu(false);
                      }}
                    >
                      {t('post.editPost')}
                    </p>
                  )}
                  {/* Admin siempre puede borrar */}
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      deletePost(post?._id, "admin-token");
                      setActionMenu(false);
                    }}
                  >
                    {t('post.deletePost')}
                  </p>
                </AttentionSeeker>
              </div>
            )}
          </div>
        </div>
        {isEditPostClicked && (
          <div className="create-post-modal">
            <EditPostForm
              className="modal-content"
              setIsEditPostClicked={setIsEditPostClicked}
              post={post}
              setActionMenu={setActionMenu}
            />
          </div>
        )}

        <div className="caption-container">
          <p>{getLocalizedContent(post?.content, i18n.language)}</p>
        </div>

        <div
          onClick={() => navigate(`/post-detail/${post?.id}`)}
          className="media"
        >
          {post?.mediaUrl && post.type !== "image" && (
            <video controls autoPlay muted loop>
              <source src={post?.mediaUrl} />
            </video>
          )}
          {post?.mediaUrl && post?.type === "image" && (
            <img src={post?.mediaUrl} alt="" />
          )}
        </div>

        <div className="post-actions-container">
          <Slide
            fraction="0"
            duration="350"
            direction="up"
            cascade
            damping={0.3}
          >
            <div
              onClick={() => setShowComments(!showComments)}
              className="comments-container"
            >
              {/* <Slide cascade direction="up"> */}
              <FaRegComment className="comment-icon" />
              {/* </Slide> */}
              <span className="number-of-comments">
                <Slide direction="up">{post?.comments?.length}</Slide>
              </span>
            </div>
            <div className="comments-container">
              <RiHeart3Line
                className="like-icon"
                onClick={() => likePost(post?._id, "admin-token")}
              />
              <span>{post?.likes?.likeCount}</span>
            </div>
          </Slide>
        </div>

        {showComments && (
          <div className="comments-section-container">
            {/* <Slide duration={1000} cascade> */}
            <div className="comments-input-section-container">
              <div className="user-profile-img-container">
                <img
                  src={loggedInUserState?.avatarURL}
                  alt={loggedInUserState?.firstName}
                />
              </div>

              <div className="comments-textarea-btn-container">
                <textarea
                  placeholder={t('comments.placeholder')}
                  onChange={(e) => setCommentData({ text: e.target.value })}
                  value={commentData?.text}
                  type="text"
                />
                <div className="comment-button-container">
                  <button
                    disabled={!commentData?.text}
                    onClick={() => {
                      addComment(post._id, commentData, "admin-token");
                      setCommentData({ text: "" });
                    }}
                  >
                    {t('comments.reply')}
                  </button>
                </div>
              </div>
            </div>

            <div className="all-comments-container">
              {post?.comments
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                ?.map((comment) => (
                  <Comment key={comment?._id} comment={comment} post={post} />
                ))}
            </div>

            {/* </Slide> */}
          </div>
        )}
      </div>
    </div>
  );
};
