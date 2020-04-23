import { login } from "../services/user-service";

function setLoggedInUserAction(user) {
  return {
    type: 'SET_USER',
    user
  };
}

export function setLoggedInUser(user) {
  return async (dispatch) => {
    try {
      const LoggedInUser = await login(user);
      dispatch(setLoggedInUserAction(LoggedInUser));
      return LoggedInUser;
    } catch (err) {
      console.log("Wrong Password/Username", err);
    }
  };
}
