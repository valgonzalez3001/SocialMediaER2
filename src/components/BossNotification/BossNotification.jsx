import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useOS } from "../../contexts/OSProvider";
import "./BossNotification.css";

export const BossNotification = ({ visible, onDismiss }) => {
  const { t } = useTranslation();
  const { openApp } = useOS();

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onDismiss, 4500);
    return () => clearTimeout(timer);
  }, [visible, onDismiss]);

  const handleClick = () => {
    openApp("messages");
    window.dispatchEvent(new Event("closeDrawer"));
    onDismiss();
  };

  return (
    <div className={`boss-notification ${visible ? "boss-notification--visible" : ""}`} onClick={handleClick}>
      <img
        className="boss-notification-avatar"
        src="/assets/messages-icon.png"
        alt="Boss"
      />
      <div className="boss-notification-body">
        <p className="boss-notification-name">{t("messagesApp.messages.missionBrief.from")}</p>
        <p className="boss-notification-text">{t("messagesApp.newMessageNotification")}</p>
      </div>
    </div>
  );
};
