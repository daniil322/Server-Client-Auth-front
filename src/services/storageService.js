const loadFromStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const saveToStorage = (user) => {
  localStorage["user"] = JSON.stringify(user);
};

export default {
  loadFromStorage,
  saveToStorage,
};
