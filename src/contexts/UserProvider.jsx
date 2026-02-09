import React, { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { useTranslation } from "react-i18next";

import { getAllUserService, getUserService } from "../services/UserService.jsx";
import { userReducer } from "../reducers/userReducer.jsx";
import { initial } from "../reducers/userReducer.jsx";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [userState, dispatch] = useReducer(userReducer, initial);

  const getAllUsers = async () => {
    const response = await getAllUserService();
    dispatch({ type: "SET_ALL_USERS", payload: response.data.users });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // Efecto que detecta cambios de idioma y recarga los usuarios
  useEffect(() => {
    const handleLanguageChange = async () => {
      try {
        // Recargar los usuarios cuando cambie el idioma
        await getAllUsers();
      } catch (error) {
        console.error("Error al recargar usuarios:", error);
      }
    };

    // Suscribirse a los cambios de idioma
    i18n.on("languageChanged", handleLanguageChange);

    // Limpiar la suscripción al desmontar
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
