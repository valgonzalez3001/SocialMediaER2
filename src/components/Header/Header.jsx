import "./Header.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="header">
      <AttentionSeeker effect="swing">
        <img
          src="/assets/echo-logo.png"
          alt="ECHO logo"
          className="header-logo"
          onClick={() => navigate("/")}
        />
      </AttentionSeeker>
    </div>
  );
};
