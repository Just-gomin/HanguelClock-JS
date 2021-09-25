const LOGIN_USER = "login_user";

export const getLoginUser = () => {
  // 로그인 된 유저 id를 가져오는 함수입니다.
  const loginUser = window.localStorage.getItem(LOGIN_USER);
  return loginUser;
};

export const setLoginUser = (id) => {
  /*
    - 현재 로그인된 유저의 id를 등록하는 함수입니다.
    - 브라우저를 종료한 뒤, 다시 실행 시켜도 로그인 상태를 유지할 수 있도록 관리합니다.
  */
  window.localStorage.setItem(LOGIN_USER, id);
};

export const getUserData = (user) => {
  // local Storage에 저장된 사용자 데이터를 가져올 때 사용하는 함수입니다.
  const data = JSON.parse(window.localStorage.getItem(user));
  return data;
};

export const setUserData = (user, data) => {
  // 유저 데이터를 등록하거나 수정할 때 사용하는 함수입니다.
  window.localStorage.setItem(user, JSON.stringify(data));
};

export const login = (id, password) => {
  // 로그인 함수
  const data = getUserData(id);
  if (data === null) {
    alert("존재하지 않는 계정입니다 🥲\n계정을 먼저 생성해주세요.");
  } else if (data.pass !== password) {
    alert("비밀번호가 일치하지 않습니다 🥲\n확인 후 다시 시도해 주세요.");
    return null;
  } else {
    setLoginUser(id);
    alert("로그인 완료🥳");
    return data;
  }
};

export const logout = () => {
  // 로그아웃 함수
  window.localStorage.setItem(LOGIN_USER, JSON.stringify(null));
};

export const makeDefaultUserData = (pass = "guestpass", usernameObj = {}) => {
  // 기본 정보를 담고 있는 사용자 객체를 반환하는 함수입니다.
  return {
    pass: pass,
    username: usernameObj,
    colors: {
      background: {},
      date: {},
      greeting: {},
      clock: {},
      todoList: {},
    },
  };
};
