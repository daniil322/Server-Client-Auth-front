import { login, signup, update } from "../services/userService";
import { getEmptyForm } from "../services/utils";
import StorageService from "../services/storageService";

const setLoggedInUserAction = (user) => {
  return {
    type: "SET_USER",
    user,
  };
};

export const logoutUser = (user) => {
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
      const loggedInUser = await login(user);
      dispatch(setLoggedInUserAction(loggedInUser));
      dispatch(setAppState("ready"));
      StorageService.saveToStorage(loggedInUser);
      return loggedInUser;
    } catch (err) {
      dispatch(setAppState("ready"));
      console.log("Wrong Password/Username", err);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    StorageService.saveToStorage("");
    dispatch(logoutUser(getEmptyForm()));
  };
};

export const userSignUp = (user) => {
  return async (dispatch) => {
    try {
      dispatch(setAppState("loading"));
      const loggedInUser = await signup(user);
      dispatch(setLoggedInUserAction(loggedInUser));
      dispatch(setAppState("ready"));
      return loggedInUser;
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
      const loggedInUser = await update(user);
      dispatch(setLoggedInUserAction(loggedInUser));
      dispatch(setAppState("ready"));
      return loggedInUser;
    } catch (err) {
      dispatch(setAppState("ready"));
      console.log("Cannot update user try later", err);
    }
  };
};
