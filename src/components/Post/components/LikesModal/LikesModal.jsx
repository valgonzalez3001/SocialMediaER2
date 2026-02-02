import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { useLoggedInUser } from "../../../../contexts/LoggedInUserProvider.jsx";
import { useUser } from "../../../../contexts/UserProvider.jsx";

export const LikesModal = ({ post }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userState } = useUser();
  const { followUser, unfollowUser, loggedInUserState } = useLoggedInUser();

  const isFollowing = (user) => false; // No podemos verificar sin arrays

  const followUnfollowHandler = (e, user) => {
    e.stopPropagation();
    const userFromAllUsers = userState?.allUsers?.find(
      ({ username }) => username === user?.username
    );
    !isFollowing(user)
      ? followUser(userFromAllUsers?._id)
      : unfollowUser(userFromAllUsers?._id);
  };

  return post?.likes?.likedBy.map((user) => (
    <div
      onClick={() => {
        navigate(`/profile/${user.username}`);
      }}
      key={user?._id}
      className="discover-user-card"
    >
      <div
        onClick={() => {
          navigate(`/profile/${user.username}`);
        }}
        className="discover-user-img-container"
      >
        <img src={user?.avatarURL} alt={user?.firstName} />
      </div>
      <div className="user-name-username-container">
        <p className="name">
          {user?.firstName} {user?.lastName}
        </p>
        <p className="username">@{user?.username}</p>
      </div>
      <div className="follow-container">
        {user?.username !== loggedInUserState?.username && (
          <button onClick={(e) => followUnfollowHandler(e, user)}>
            {t('profile.follow')}
          </button>
        )}
      </div>
    </div>
  ));
};
