import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { getLocalizedContent } from '../../../../utils/i18nHelpers.jsx';

import { useLoggedInUser } from "../../../../contexts/LoggedInUserProvider.jsx";
import { useUser } from "../../../../contexts/UserProvider.jsx";
import { createdOnDate } from "../../../../utils/date.jsx";
import { ShowFollowersModal } from "../ShowFollowersModal/ShowFollowersModal";
import { ShowFollowingModal } from "../ShowFollowingModal/ShowFollowingModal";
import { CgCalendarDates, RxCross2 } from "../../../../utils/icons.jsx";


export const UserInfo = ({ setIsEditProfile, postsByUser }) => {
  const { t, i18n } = useTranslation();
  const { userState } = useUser();
  const { username } = useParams();
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const { loggedInUserState, followUser, unfollowUser } = useLoggedInUser();

  const isOwnProfile = username === loggedInUserState?.username;

  const userDetails = loggedInUserState;

  const user = userState?.allUsers?.find(
    ({ username: user }) => user === username
  );

  const followingCount =
    user?.stats?.followingCount ?? 0;

  const followersCount =
    user?.stats?.followersCount ?? 0;


  const canShowFollowingModal = false; // Deshabilitado ya que no hay arrays
  const canShowFollowersModal = false; // Deshabilitado ya que no hay arrays


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
  return (
    <div className="user-info-container">
      <div className="profilepicture-container">
        <img src={user?.avatarURL} alt={user?.firstName} />
        {isOwnProfile ? (
          <button onClick={() => setIsEditProfile(true)}>{t('profile.editProfile')}</button>
        ) : (
          <button onClick={(e) => followUser(user?._id)}>
            {t('profile.follow')}
          </button>
        )}
      </div>
      <div className="username-container">
        <p className="name">
          {user?.firstName} {user?.lastName}
          {user?.verified === true && (
            <img
              src="/assets/verified_badge.png"
              alt={t('profile.verifiedAccount')}
              className="verified-badge"
              title={t('profile.verifiedAccount')}
            />
          )}
        </p>

        <p className="username">@{user?.username}</p>
      </div>
      <div className="bio-container">
        <p>{getLocalizedContent(user?.bio, i18n.language)}</p>
      </div>

      <div className="website-container">
        <a href={user?.website}>{user?.website}</a>
        <div className="joining-date-container">
          <CgCalendarDates />
          <span>{t('profile.joined')} {createdOnDate(user)}</span>
        </div>
      </div>
      <div className="post-followers-following-container">
        <p>
          {postsByUser.length}
          <span>{t('profile.posts')}</span>
        </p>
        <p
          className="post-following-count"
          onClick={() => {
            if (canShowFollowingModal) setShowFollowing(true);
          }}
        >
          {followingCount}
          <span>{t('profile.following')}</span>
        </p>
        {showFollowing && (
          <div className="like-modal">
            <div className="likes-content">
              {" "}
              <div className="likes-header">
                <h2>{t('profile.following')}</h2>
                <RxCross2
                  onClick={() => {
                    setShowFollowing(false);
                  }}
                />
              </div>
              <ShowFollowingModal
                user={user}
                isFollowing={isFollowing}
                followUnfollowHandler={followUnfollowHandler}
                setShowFollowing={setShowFollowing}
              />
            </div>
          </div>
        )}
        <p
          className="post-follower-count"
          onClick={() => {
            if (canShowFollowersModal) setShowFollowers(true);
          }}
        >
          {followersCount}
          <span>{t('profile.followers')}</span>
        </p>
        {showFollowers && (
          <div className="like-modal">
            <div className="likes-content">
              {" "}
              <div className="likes-header">
                <h2>{t('profile.followers')}</h2>
                <RxCross2
                  onClick={() => {
                    setShowFollowers(false);
                  }}
                />
              </div>
              <ShowFollowersModal
                user={user}
                isFollowing={isFollowing}
                followUnfollowHandler={followUnfollowHandler}
                setShowFollowers={setShowFollowers}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
