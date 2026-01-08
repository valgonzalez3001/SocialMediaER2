import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider";

import { CreatePostForm } from "../CreatePostForm/CreatePostForm";
import {
  RiHomeWifiLine,
  BiSearch,
  HiOutlineBookmark,
  CgProfile,
  FaFeather,
} from "../../utils/icons";
import { MdAdminPanelSettings } from "react-icons/md";

export const Navbar = () => {
  const [isCreateNewPostClicked, setIsCreateNewPostClicked] = useState(false);
  const { loggedInUserState } = useLoggedInUser();

  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "rgb(29, 155, 240)" : "white",
  });
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/">
            {<RiHomeWifiLine className="navlink-icon" />}
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/explore">
            <BiSearch className="navlink-icon" />
            <p>Explore</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/bookmark">
            <HiOutlineBookmark className="navlink-icon" />
            <p>Bookmark</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            style={getActiveStyle}
            to={`/profile/${loggedInUserState.username || 'Katherine'}`}
          >
            <CgProfile className="navlink-icon" />
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/admin">
            <MdAdminPanelSettings className="navlink-icon" />
            <p>Admin</p>
          </NavLink>
        </li>
      </ul>
      <button
        className="create-new-post-btn"
        onClick={() => setIsCreateNewPostClicked(!isCreateNewPostClicked)}
      >
        <FaFeather className="feather-icon" />
        <span>New Post</span>
      </button>
      {isCreateNewPostClicked && (
        <div className="create-post-modal">
          <CreatePostForm
            className="modal-content"
            setIsCreateNewPostClicked={setIsCreateNewPostClicked}
          />
        </div>
      )}
    </nav>
  );
};
