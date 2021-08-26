const form = document.querySelector(".greeting__form"),
  input = form.querySelector(".greeting__form__input"),
  message = document.querySelector(".greeting__message");

const GREETING_SHOWING_ON = "showing-on";
const GREETING_SHOWING_OFF = "showing-off";

const MENTS = [
  "아, 너가 있어 아름다운 오늘이야 :)",
  "아, 오늘의 너가 어땠든, 너의 가능성은 사라지지 않아.",
  "아, 너는 자세히 볼수록 아름다워, 오래보자 우리:)",
  "아, 감정에 솔직해져 보자. 울고 싶음 울어도 돼",
  "아, 너는 오늘도 역시 아름답구나 :)",
  "아, 나 오늘 정말 힘들었다? 그래도 너가 있어서 다행이야",
  "아, 넌 역시 오늘도 멋졌어 :)",
  "아, 웃는 얼굴을 보니 나도 기분이 좋네 :)",
];

const randomNum = () => {
  let result = parseInt(Math.random() * MENTS.length);
  return result;
};

const saveName = (name) => {
  localStorage.setItem("user", name);
};

const paintGreeting = (name) => {
  form.classList.remove(GREETING_SHOWING_ON);
  form.classList.add(GREETING_SHOWING_OFF);

  message.classList.remove(GREETING_SHOWING_OFF);
  message.classList.add(GREETING_SHOWING_ON);

  let basement = MENTS[randomNum()];
  let greetMSG = `"${name}${basement}"`;
  message.innerText = greetMSG;
};

const submitHandler = (event) => {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
};

const askForName = () => {
  form.classList.remove(GREETING_SHOWING_OFF);
  form.classList.add(GREETING_SHOWING_ON);

  message.classList.remove(GREETING_SHOWING_ON);
  message.classList.add(GREETING_SHOWING_OFF);

  form.addEventListener("submit", submitHandler);
};

const loadName = () => {
  const name = localStorage.getItem("user");
  if (name !== null) {
    paintGreeting(name);
  } else {
    askForName();
  }
};

const inputFocus = (event) => {
  input.placeholder = "";
};

const inputFocusout = (event) => {
  input.placeholder = "이름이 어떻게 되요? 성은 빼고 적어주세요 =)";
};

const greetingInit = () => {
  loadName();
  input.addEventListener("click", inputFocus);
  input.addEventListener("blur", inputFocusout);
};

greetingInit();
