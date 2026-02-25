/**
 * Utility functions for the mock server
 * Sin autenticación - usuario admin por defecto (moderador de la red social)
 */
import i18n from "../../i18n.jsx";

export const formatDate = () => new Date().toISOString();

/**
 * Retorna siempre la cuenta oficial ECHO (sin autenticación real)
 */
export const requiresAuth = function (request) {
  return {
    username: "ECHO",
    firstName: i18n.t("officialAccount.name"),
    lastName: "",
    avatarURL: "/assets/echo-logo-bg.png",
  };
};
