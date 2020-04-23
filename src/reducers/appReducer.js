import { getEmptyForm } from "services/utils";

const INITIAL_STATE = {
  user: getEmptyForm(),
  appState: "ready",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_APPSTATE":
      return { ...state, appState: action.appState };
    default:
      return state;
  }
};

export default userReducer;
