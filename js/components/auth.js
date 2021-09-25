/*
    # auth.js

    - 사용자 인증에 관한 것들을 처리합니다.
    - login, signup components show on/off.
    - login, logout, signup button handdler.
    - login 없이 사용하는 경우를 처리합니다.
*/
import {
  getUserData,
  login,
  logout,
  makeDefaultUserData,
  setUserData,
} from "../utils/localDB.js";

const auth = document.querySelector(".auth");

const loginContainer = auth.querySelector(".login"),
  login_id = loginContainer.querySelector("#login-id"),
  login_pass = loginContainer.querySelector("#login-pass"),
  login_btn = loginContainer.querySelector("#login-btn"),
  login_option_signup = loginContainer.querySelector(".opt__signup"),
  login_option_not_login = loginContainer.querySelector(".opt__not-login");

const signupContainer = auth.querySelector(".signup"),
  signup_username_first = signupContainer.querySelector(
    "#signup-username-first"
  ),
  signup_username_second = signupContainer.querySelector(
    "#signup-username-second"
  ),
  signup_id = signupContainer.querySelector("#signup-id"),
  signup_pass = signupContainer.querySelector("#signup-pass"),
  signup_pass2 = signupContainer.querySelector("#signup-pass2"),
  signup_btn = signupContainer.querySelector("#signup-btn");

// Login Component
const showOnLogin = () => {
  // Login Element를 화면에 표시하는 함수입니다.
  loginContainer.style.display = "block";
  loginContainer.style.zIndex = 1;
};

const showOffLogin = () => {
  // Login Element를 화면에서 보이지 않게 하는 함수입니다.
  loginContainer.style.display = "none";
};

const loginHandler = (event) => {
  // 사용자가 로그인 시도를 처리하는 함수입니다.
  event.preventDefault();

  const id = login_id.value;
  const pass = login_pass.value;

  if (id === "") {
    alert("ID를 입력해주세요😱");
  } else if (pass === "") {
    alert("비밀번호를 입력해주세요😱");
  } else {
    login(id, pass);
  }
};

const loginOptionHandler = (event) => {
  // 회원 가입 또는 로그인 하지 않고 진행하기를 선택하는 경우 처리하는 함수입니다.
  if (event.target === login_option_signup) {
  } else {
  }
};

// Logout Function
const logoutBtnHandler = () => {
  // 로그아웃 버튼을 누렀을 때 처리하는 함수입니다.
  logout();
  showOnLogin();
};

// Signup Component
const showOnSignUp = () => {
  // SignUp Element를 화면에 표시되도록하는 함수입니다.
  signupContainer.style.display = "block";
};

const showOffSignUp = () => {
  // SignUp Element를 화면에 보이지 않게 하는 함수입니다.
  signupContainer.style.display = "none";
};

const signupSubmitHandler = (event) => {
  // 회원가입을 처리하는 함수입니다.
  event.preventDefault();

  const username = {
    first: signup_username_first.value,
    second: signup_username_second.value,
  };
  const id = signup_id.value;
  const pass1 = signup_pass.value;
  const pass2 = signup_pass2.value;

  if (getUserData(id)) {
    alert("이미 존재하는 계정입니다 🥲\n다른 아이디를 입력해주세요!");
  } else if (pass1 !== pass2) {
    alert("입력하신 비밀번호가 서로 달라요 🥲\n다시 확인해주세요!");
  } else {
    const userData = makeDefaultUserData(pass1, username);
    setUserData(id, userData);
    alert("회원가입이 완료되었습니다🥳");
  }
};

const authInit = () => {
  // Auth와 관련된 버튼들 Event Listener를 달아주는 함수입니다.
  login_btn.addEventListener("click", loginHandler);
  login_option_signup.addEventListener("click", loginOptionHandler);
  login_option_not_login.addEventListener("click", loginOptionHandler);
  signup_btn.addEventListener("click", signupSubmitHandler);
};

export { showOnLogin, showOffLogin, showOnSignUp, showOffSignUp, authInit };
