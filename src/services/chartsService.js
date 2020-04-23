import Axios from "axios";
import Store from "store/userStore";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/user"
    : "//localhost:3030/api/charts";

let axios = Axios.create({
  withCredentials: true,
});

async function get(user) {
  const userData = await axios.put(BASE_URL, Store.getState().user);
  return userData.data;
}

export default { get };
