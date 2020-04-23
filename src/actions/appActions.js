import { login, signup, update } from "../services/userService";
import { getEmptyForm } from "../services/utils";

const setLoggedInUserAction = (user) => {
  return {
    type: "SET_USER",
    user,
  };
};

export const logout = (user = getEmptyForm()) => {
  return {
    type: "SET_USER",
    user,
  };
};

const setAppState = (appState) => {
  return {
    type: "SET_APPSTATE",
    appState,
  };
};

export const setLoggedInUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setAppState("loading"));
      const LoggedInUser = await login(user);
      dispatch(setLoggedInUserAction(LoggedInUser));
      dispatch(setAppState("ready"));
      return LoggedInUser;
    } catch (err) {
      dispatch(setAppState("ready"));
      console.log("Wrong Password/Username", err);
    }
  };
};

export const userSignUp = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setAppState("loading"));
      const LoggedInUser = await signup(user);
      dispatch(setLoggedInUserAction(LoggedInUser));
      dispatch(setAppState("ready"));
      return LoggedInUser;
    } catch (err) {
      console.log("userName already exists", err);
      dispatch(setAppState("ready"));
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setAppState("loading"));
      const LoggedInUser = await update(user);
      dispatch(setLoggedInUserAction(LoggedInUser));
      dispatch(setAppState("ready"));
      return LoggedInUser;
    } catch (err) {
      dispatch(setAppState("ready"));
      console.log("Cannot update user try later", err);
    }
  };
};
