const LOGIN_USER = "login_user";

export const getLoginUser = () => {
  const loginUser = window.localStorage.getItem(LOGIN_USER);
  return loginUser;
};

export const setLoginUser = (id) => {
  window.localStorage.setItem(LOGIN_USER, id);
};

export const getUserData = (user) => {
  const data = JSON.parse(window.localStorage.getItem(user));
  return data;
};

export const setUserData = (user, data) => {
  window.localStorage.setItem(user, JSON.stringify(data));
};

export const login = (id, password) => {
  const data = getUserData(id);

  if (data === null || data.password !== password) {
    return null;
  } else {
    setLoginUser(id);
    return data;
  }
};

export const logout = () => {
  window.localStorage.setItem(LOGIN_USER, JSON.stringify(null));
};
