import "./Header.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";

export const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="header">
      <AttentionSeeker effect="swing">
        <img
          src="/assets/social-media-logo.png"
          alt="ECHO logo"
          className="header-logo"
          onClick={() => navigate("/")}
        />
      </AttentionSeeker>

      <p onClick={() => navigate("/")}>{t('header.appName')}</p>
      
      <LanguageSelector />
    </div>
  );
};
