import React from "react";
import { useLoggedInUser } from "../../../../contexts/LoggedInUserProvider.jsx";
import { useNavigate } from "react-router-dom";

export const ShowFollowingModal = ({
  user,
  isFollowing,
  followUnfollowHandler,
  setShowFollowing,
}) => {
  const { loggedInUserState } = useLoggedInUser();
  const navigate = useNavigate();
  return (
    <p className="no-bookmarks">Following list not available</p>
  );
};
