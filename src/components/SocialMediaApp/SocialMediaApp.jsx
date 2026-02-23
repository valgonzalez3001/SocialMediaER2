import React, { useMemo, useState, useEffect } from "react";
import "./SocialMediaApp.css";
import { useOS } from "../../contexts/OSProvider";
import { NavRoutes } from "../../Routes/NavRoutes";
import { FaTimes, FaMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useStats } from "../../contexts/StatsProvider";
import { useNavigate } from "react-router-dom";

/**
 * Componente SocialMediaApp - Envuelve la aplicación de red social en una ventana
 */
export const SocialMediaApp = ({ mode = "window" }) => {
  const { closeApp, minimizeApp } = useOS();
  const { t } = useTranslation();
  const { challenge1Completed } = useStats();
  const navigate = useNavigate();
  const isEmbedded = mode === "embedded";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrorKey, setLoginErrorKey] = useState("");
  const [loginDone, setLoginDone] = useState(
    () => sessionStorage.getItem("socialLoginDone") === "true"
  );

  const shouldRequireLogin = useMemo(() => {
    const missionBriefRead = sessionStorage.getItem("missionBriefRead") === "true";
    return missionBriefRead && !challenge1Completed;
  }, [challenge1Completed]);

  // Navegar a home cuando se monta el componente o después del login
  useEffect(() => {
    if (loginDone && !sessionStorage.getItem("fromAdmin")) {
      navigate("/", { replace: true });
    }
    // Run only when login state changes; route changes should not trigger redirects.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginDone]);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const isValid = username === "echo" && password === "1234";
    if (isValid) {
      sessionStorage.setItem("socialLoginDone", "true");
      setLoginDone(true);
      setLoginErrorKey("");
      navigate("/", { replace: true });
      return;
    }
    setLoginErrorKey("socialLogin.errorInvalid");
  };

  return (
    <div className={isEmbedded ? "social-app-embedded" : "social-app-window"}>
      {!isEmbedded && (
        <div className="window-titlebar">
          <div className="window-title">
            <span className="window-title-text">ECHO</span>
          </div>
          <div className="window-controls">
            <button
              className="window-button minimize"
              onClick={minimizeApp}
              title={t("desktop.window.minimize")}
            >
              <FaMinus />
            </button>
            <button
              className="window-button close"
              onClick={() => closeApp("social")}
              title={t("desktop.window.close")}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Contenido de la aplicación */}
      <div className="social-app-content">
        {shouldRequireLogin && !loginDone ? (
          <div className="social-login">
            <form className="social-login-card" onSubmit={handleLoginSubmit}>
              <div className="social-login-header">
                <div className="social-login-brand">
                  <img
                    src="/assets/social-media-logo.png"
                    alt="ECHO"
                    className="social-login-logo"
                  />
                  <span className="social-login-brand-name">ECHO</span>
                </div>
                <span className="social-login-title">{t("socialLogin.title")}</span>
                <span className="social-login-subtitle">
                  {t("socialLogin.subtitle")}
                </span>
              </div>
              <div className="social-login-fields">
                <label className="social-login-label" htmlFor="login-username">
                  {t("socialLogin.usernameLabel")}
                </label>
                <input
                  id="login-username"
                  className="social-login-input"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="echo"
                  autoComplete="username"
                />
                <label className="social-login-label" htmlFor="login-password">
                  {t("socialLogin.passwordLabel")}
                </label>
                <input
                  id="login-password"
                  className="social-login-input"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="1234"
                  autoComplete="current-password"
                />
                {loginErrorKey && (
                  <span className="social-login-error">{t(loginErrorKey)}</span>
                )}
              </div>
              <button className="social-login-button" type="submit">
                {t("socialLogin.submit")}
              </button>
            </form>
          </div>
        ) : (
          <NavRoutes />
        )}
      </div>
    </div>
  );
};
