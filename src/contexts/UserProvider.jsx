import React, { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";

import { getAllUserService, getUserService } from "../services/UserService.jsx";
import { userReducer } from "../reducers/userReducer.jsx";
import { initial } from "../reducers/userReducer.jsx";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initial);

  const getAllUsers = async () => {
    const response = await getAllUserService();
    dispatch({ type: "SET_ALL_USERS", payload: response.data.users });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
