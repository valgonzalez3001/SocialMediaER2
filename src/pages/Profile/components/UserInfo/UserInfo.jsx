import React from "react";
import { useTranslation } from 'react-i18next';
import { useUser } from "../../../../contexts/UserProvider.jsx";
import { getLocalizedContent } from '../../../../utils/i18nHelpers.jsx';
import { createdOnDate } from '../../../../utils/date.jsx';

export const UserInfo = ({ username, postsByUser }) => {
  const { t, i18n } = useTranslation();
  const { userState } = useUser();

  const isEchoProfile = username === "ECHO";

  // Si es el perfil ECHO, usar datos fijos; si no, buscar en allUsers
  const user = isEchoProfile
    ? {
        _id: "echo-official",
        firstName: t("officialAccount.name"),
        lastName: "",
        username: "ECHO",
        bio: t("officialAccount.bio", ""),
        avatarURL: "/assets/echo-logo-bg.png",
        verified: true,
        stats: { followersCount: "7.25M", followingCount: 0 },
      }
    : userState?.allUsers?.find((u) => u.username === username) || null;
  if (!user) return null;

  return (
    <div className="user-info-container">
      <div className="profilepicture-container">
        <img src={user.avatarURL} alt={user.firstName} />
        {isEchoProfile && (
          <button>{t('profile.editProfile')}</button>
        )}
      </div>
      <div className="username-container">
        <p className="name">
          {user.firstName}{user.lastName ? ` ${user.lastName}` : ""}
          {user.verified && (
            <img
              src="/assets/verified_badge.png"
              alt={t('profile.verifiedAccount')}
              className="verified-badge"
              title={t('profile.verifiedAccount')}
            />
          )}
        </p>
        <p className="username">
          {isEchoProfile ? t("officialAccount.handle") : `@${user.username}`}
        </p>
      </div>
      <div className="bio-container">
        <p>{isEchoProfile ? user.bio : getLocalizedContent(user.bio, i18n.language)}</p>
        {!isEchoProfile && user.createdAt && (
          <p className="joined-date"> {t('profile.joined')} {createdOnDate(user, i18n.language)}</p>
        )}
      </div>
      <div className="post-followers-following-container">
        <p>
          {postsByUser.length}
          <span>{t('profile.posts')}</span>
        </p>
        <p className="post-following-count">
          {user.stats?.followingCount ?? 0}
          <span>{t('profile.following')}</span>
        </p>
        <p className="post-follower-count">
          {user.stats?.followersCount ?? 0}
          <span>{t('profile.followers')}</span>
        </p>
      </div>
    </div>
  );
};
