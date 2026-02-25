import React, { createContext, useContext } from "react";
import { useReducer, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { loggedInUserReducer, initial } from "../reducers/loggedInUserReducer.jsx";
import {
  editUserService,
  followUserService,
  unfollowUserService,
  getUserService,
} from "../services/UserService.jsx";
import { useUser } from "./UserProvider.jsx";

const LoggedInUserContext = createContext();

export const LoggedInUserProvider = ({ children }) => {
  const { userState, dispatch } = useUser();
  const { t } = useTranslation();

  const [loggedInUserState, loggedInUserDispatch] = useReducer(
    loggedInUserReducer,
    initial
  );

  const getUser = async (user) => {
    try {
      const response = await getUserService(user);
      if (response.status === 200) {
        loggedInUserDispatch({
          type: "SET_USER",
          payload: { ...response.data.user },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = async (userData) => {
    try {
      const response = await editUserService(userData, "admin-token");
      if (response.status === 201) {
        const updatedUser = response.data.user;
        loggedInUserDispatch({ type: "SET_USER", payload: updatedUser });
        const updatedUsers = userState.allUsers.map((user) =>
          user.username === updatedUser.username ? updatedUser : user
        );
        dispatch({ type: "SET_ALL_USERS", payload: [...updatedUsers] });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const followUser = async (userId) => {
    try {
      const response = await followUserService(userId, "admin-token");
      if (response.status === 200) {
        const { user, followUser } = response.data;
        const updatedAllUser = userState?.allUsers.map((individualUser) =>
          individualUser.username === user.username
            ? { ...user }
            : individualUser.username === followUser.username
            ? { ...followUser }
            : individualUser
        );

        dispatch({ type: "SET_ALL_USERS", payload: [...updatedAllUser] });
        loggedInUserDispatch({ type: "SET_USER", payload: user });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const unfollowUser = async (userId) => {
    try {
      const response = await unfollowUserService(userId, "admin-token");
      if (response.status === 200) {
        const { user, followUser } = response.data;

        const updatedAllUser = userState?.allUsers.map((individualUser) =>
          individualUser.username === user.username
            ? { ...user }
            : individualUser.username === followUser.username
            ? { ...followUser }
            : individualUser
        );

        dispatch({ type: "SET_ALL_USERS", payload: [...updatedAllUser] });
        loggedInUserDispatch({ type: "SET_USER", payload: user });
      }
    } catch (error) {
      console.error(error);
    }
  };



  const avatars = [
    {
      url: "https://res.cloudinary.com/darwtgzlk/image/upload/v1687601406/socialMedia/avatar/avatar-1_yg7arg.png",
    },
    {
      url: "https://res.cloudinary.com/darwtgzlk/image/upload/v1687601402/socialMedia/avatar/avatar2_wxqedh.png",
    },
    {
      url: "https://res.cloudinary.com/darwtgzlk/image/upload/v1687601397/socialMedia/avatar/avatar3_gc9xeu.png",
    },
  ];

  // Cargar la cuenta oficial de ECHO como admin
  useEffect(() => {
    const echoAdmin = {
      _id: "echo-official",
      username: "ECHO",
      firstName: t("officialAccount.name"),
      handle: t("officialAccount.handle"),
      bio: t("officialAccount.bio"),
      avatarURL: "/assets/echo-logo-bg.png",
      verified: true,
      isAdmin: true,
      stats: { followersCount: 0, followingCount: 0 },
    };
    loggedInUserDispatch({ type: "SET_USER", payload: echoAdmin });
  }, [t]);

  return (
    <LoggedInUserContext.Provider
      value={{
        loggedInUserState,
        loggedInUserDispatch,
        editUser,
        followUser,
        unfollowUser,
        avatars,
      }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
};

export const useLoggedInUser = () => useContext(LoggedInUserContext);
