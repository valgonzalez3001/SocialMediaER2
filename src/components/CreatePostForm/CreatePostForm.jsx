import "./CreatePostForm.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useTranslation } from 'react-i18next';

import { IoMdClose, VscSmiley, ImFilePicture } from "../../utils/icons.jsx";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";
import { usePosts } from "../../contexts/PostsProvider.jsx";
import { useStats } from "../../contexts/StatsProvider.jsx";
import { EmojiModal } from "../EmojiModal/EmojiModal";
import { ConclusionChallenge } from "./ConclusionChallenge";


export const CreatePostForm = ({ setIsCreateNewPostClicked, className }) => {
  const { t } = useTranslation();
  const { createPost } = usePosts();
  const { loggedInUserState } = useLoggedInUser();
  const { challenge1Completed, challenge2Completed } = useStats();
  const navigate = useNavigate();
  const firstName = loggedInUserState?.firstName;
  const lastName = loggedInUserState?.lastName;
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [showChallengeNotification, setShowChallengeNotification] = useState(false);

  const [postForm, setPostForm] = useState({
    firstName,
    lastName,
    content: "",
    mediaUrl: "",
  });

  const handleMediaInput = (e) => {
    const file = e.target.files[0];
    if (file?.type.startsWith("image/") || file.type.startsWith("video/")) {
      if (file.size < 20 * 1024 * 1024) {
        setPostForm((prev) => ({
          ...prev,
          mediaUrl: URL.createObjectURL(file),
          type: file?.type.startsWith("image/") ? "image" : "video",
        }));
      } else {
        toast.error(t('createPost.fileTooBig'));
      }
    } else {
      toast.error(t('createPost.invalidFileType'));
    }
  };

  useEffect(() => {
    setPostForm((prev) => ({ ...prev, firstName, lastName }));
  }, [loggedInUserState]);

  // Si reto 2 no está completado pero reto 1 sí, mostrar el reto de conclusiones
  if (challenge1Completed && !challenge2Completed) {
    return <ConclusionChallenge />;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!challenge1Completed) {
            return; // No hacer nada si el reto 1 no está completado
          }
          createPost(e, postForm, "admin-token");
          setPostForm({
            firstName: loggedInUserState?.firstName,
            lastName: loggedInUserState?.lastName,
            content: "",
            mediaUrl: "",
          });
          setIsCreateNewPostClicked && setIsCreateNewPostClicked(false);
        }}
        className={`new-post-container ${className}`}
      >
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
          <div className="text-content-container">
            <textarea
              onChange={(e) =>
                setPostForm((prev) => ({ ...prev, content: e.target.value }))
              }
              value={postForm.content}
              placeholder={t('createPost.placeholder')}
            />
            {setIsCreateNewPostClicked && (
              <IoMdClose
                onClick={() => {
                  setIsCreateNewPostClicked && setIsCreateNewPostClicked(false);
                }}
                className="close-create-post-modal"
              />
            )}
          </div>

          {postForm?.mediaUrl && postForm.type !== "image" && (
            <div className="media-container">
              <video muted loop>
                <source src={postForm?.mediaUrl} />
              </video>
              <IoMdClose
                onClick={() => {
                  setPostForm({ ...postForm, mediaUrl: "" });
                }}
                className="close-media"
              />
            </div>
          )}

          {postForm?.mediaUrl && postForm.type === "image" && (
            <div className="media-container">
              <img src={postForm?.mediaUrl} alt="" />
              <IoMdClose
                onClick={() => {
                  setPostForm({ ...postForm, mediaUrl: "" });
                }}
                className="close-media"
              />
            </div>
          )}

          <div className="input-btn-container">
            <div className="toolbar-container">
              <label htmlFor="mediaForCreate">
                {" "}
                <ImFilePicture className="file-icon" />
              </label>
              <input
                onChange={handleMediaInput}
                type="file"
                id="mediaForCreate"
              />

              <VscSmiley
                className="smily-emoji"
                onClick={() => setShowEmojiModal(true)}
              />
            </div>
            <div className="post-btn-container">
              <button
                disabled={!challenge1Completed || (!postForm.content && !postForm.mediaUrl)}
                type="submit"
              >
                {t('createPost.publish')}
              </button>
            </div>
          </div>
        </div>
        <EmojiModal
          showEmojiModal={showEmojiModal}
          setShowEmojiModal={setShowEmojiModal}
          setPostForm={setPostForm}
        />
      </form>
    </>
  );
};
