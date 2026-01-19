import "./Header.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";

export const Header = () => {
  const navigate = useNavigate();

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

      <p onClick={() => navigate("/")}>ECHO</p>
    </div>
  );
};
