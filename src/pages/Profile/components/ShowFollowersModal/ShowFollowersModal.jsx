import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedInUser } from "../../../../contexts/LoggedInUserProvider";

export const ShowFollowersModal = ({
  user,
  setShowFollowers,
  followUnfollowHandler,
  isFollowing,
}) => {
  const { loggedInUserState } = useLoggedInUser();
  const navigate = useNavigate();
  return (
    <p className="no-bookmarks">Followers list not available</p>
  );
};
