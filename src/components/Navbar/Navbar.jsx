import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useLoggedInUser } from "../../contexts/LoggedInUserProvider.jsx";
import { useStats } from "../../contexts/StatsProvider.jsx";
import { useTranslation } from 'react-i18next';
import { PopupNotification } from "../PopupNotification/PopupNotification";
import {
  RiHomeWifiLine,
  CgProfile,
} from "../../utils/icons.jsx";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiRobot2Line, RiErrorWarningLine } from "react-icons/ri";
import { NewPostLauncher } from "../../pages/NewPost/NewPostLauncher.jsx";
import aiIncorrectUsesCases from "../../pages/AIIncorrectUses/AIIncorrectUses.json";

export const Navbar = () => {
  const { t } = useTranslation();
  const { loggedInUserState } = useLoggedInUser();
  const { challenge1Completed, challenge2Completed, challenge3Completed } = useStats();
  const [popup, setPopup] = useState({
    visible: false,
    message: "",
    position: { top: 0, left: 0 },
  });

  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "rgb(29, 155, 240)" : "white",
  });

  const getDisabledStyle = () => ({
    color: "rgba(255, 255, 255, 0.3)",
    cursor: "not-allowed",
  });

  const handleShowBlockedPopup = (e, messageKey = "desktop.popup.playChallenge") => {
    // Asegurarse de obtener el elemento li o div correcto
    let target = e.currentTarget;
    
    // Si el click fue en un elemento hijo, ir al parent
    if (!target.classList?.contains("disabled")) {
      target = target.closest(".disabled") || target.closest("li");
    }

    const rect = target?.getBoundingClientRect();
    if (!rect) return;

    const popupWidth = 280;
    setPopup({
      visible: true,
      message: t(messageKey),
      position: {
        top: Math.max(50, rect.top - 60),
        left: Math.max(10, rect.left + rect.width / 2 - popupWidth / 2),
      },
    });
  };

  const handleClosePopup = () => {
    setPopup({ ...popup, visible: false });
  };

  const pendingChallenge1 = challenge1Completed ? 0 : 5;
  const pendingChallenge2 = challenge1Completed && !challenge2Completed ? 1 : 0;
  const pendingChallenge3 =
    challenge2Completed && !challenge3Completed ? aiIncorrectUsesCases.length : 0;

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
            <p className="navlink-label">
              <span className="navlink-label-text">{t('nav.admin')}</span>
              {pendingChallenge1 > 0 && <span className="nav-badge">{pendingChallenge1}</span>}
            </p>
          </NavLink>
        </li>
        <li>
          {challenge1Completed ? (
            <NavLink 
              className="navlink"
              style={getActiveStyle} 
              to="/ai-content"
            >
              <RiRobot2Line className="navlink-icon" />
              <p className="navlink-label">
                <span className="navlink-label-text">{t('nav.aiContent')}</span>
                {pendingChallenge2 > 0 && <span className="nav-badge">{pendingChallenge2}</span>}
              </p>
            </NavLink>
          ) : (
            <div
              className="navlink disabled"
              style={getDisabledStyle()}
              onClick={(e) => handleShowBlockedPopup(e, "desktop.popup.playChallenge")}
              role="button"
            >
              <RiRobot2Line className="navlink-icon" />
              <p>{t('nav.aiContent')}</p>
            </div>
          )}
        </li>
        <li>
          {challenge2Completed ? (
            <NavLink 
              className="navlink"
              style={getActiveStyle} 
              to="/ai-incorrect-uses"
            >
              <RiErrorWarningLine className="navlink-icon" />
              <p className="navlink-label">
                <span className="navlink-label-text">{t('nav.aiIncorrectUses')}</span>
                {pendingChallenge3 > 0 && <span className="nav-badge">{pendingChallenge3}</span>}
              </p>
            </NavLink>
          ) : (
            <div
              className="navlink disabled"
              style={getDisabledStyle()}
              onClick={(e) => handleShowBlockedPopup(e, "desktop.popup.playChallenge2")}
              role="button"
            >
              <RiErrorWarningLine className="navlink-icon" />
              <p>{t('nav.aiIncorrectUses')}</p>
            </div>
          )}
        </li>
      </ul>
      <NewPostLauncher />

      {popup.visible && (
        <PopupNotification
          message={popup.message}
          position={popup.position}
          onClose={handleClosePopup}
          duration={800}
        />
      )}
    </nav>
  );
};
