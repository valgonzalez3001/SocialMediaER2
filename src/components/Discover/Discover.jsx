import "./Discover.css";
import React from "react";

import { useUser } from "../../contexts/UserProvider.jsx";
import { useNavigate } from "react-router-dom";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";

export const Discover = () => {
  const { loggedInUserState, followUser } = useLoggedInUser();
  const { userState } = useUser();
  const navigate = useNavigate();

  const whoToFollow = userState?.allUsers?.filter(
    (user) =>
      user?.username !== loggedInUserState?.username
  );

  return (
    <main className="discover">
      <div className="discover-container">
        <div className="discover-header">
          <p>Who to follow?</p>
        </div>
        <div className="discover-body">
          {whoToFollow?.length ? (
            whoToFollow?.map((user) => (
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
                  <img src={user?.avatarURL} alt={user.firstName} />
                </div>
                <div className="user-name-username-container">
                  <p className="name">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="username">@{user?.username}</p>
                </div>
                <div className="follow-container">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      followUser(user?._id);
                    }}
                  >
                    Follow
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-bookmarks">No more suggestions!</p>
          )}
        </div>
      </div>
    </main>
  );
};
