import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";
import { useTranslation } from 'react-i18next';

import { CreatePostForm } from "../CreatePostForm/CreatePostForm";
import {
  RiHomeWifiLine,
  BiSearch,
  CgProfile,
  FaFeather,
} from "../../utils/icons.jsx";
import { MdAdminPanelSettings } from "react-icons/md";

export const Navbar = () => {
  const { t } = useTranslation();
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
            <p>{t('nav.home')}</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/explore">
            <BiSearch className="navlink-icon" />
            <p>{t('nav.explore')}</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            style={getActiveStyle}
            to={`/profile/${loggedInUserState.username || 'Katherine'}`}
          >
            <CgProfile className="navlink-icon" />
            <p>{t('nav.profile')}</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" style={getActiveStyle} to="/admin">
            <MdAdminPanelSettings className="navlink-icon" />
            <p>{t('nav.admin')}</p>
          </NavLink>
        </li>
      </ul>
      <button
        className="create-new-post-btn"
        onClick={() => setIsCreateNewPostClicked(!isCreateNewPostClicked)}
      >
        <FaFeather className="feather-icon" />
        <span>{t('nav.newPost')}</span>
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
