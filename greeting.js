const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const SHOWING_ON = "showing-on";
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

function randomNum() {
  let result = parseInt(Math.random() * MENTS.length);
  return result;
}

function saveName(name) {
  localStorage.setItem("user", name);
}

function paintGreeting(name) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  let basement = MENTS[randomNum()];
  let greetMSG = `"${name}${basement}"`;
  greeting.innerText = greetMSG;
}

function submitHandler(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", submitHandler);
}

function loadName() {
  const name = localStorage.getItem("user");
  if (name !== null) {
    paintGreeting(name);
  } else {
    askForName();
  }
}

function inputFocus(event) {
  input.placeholder = "";
}

function inputFocusout(event) {
  input.placeholder = "이름이 어떻게 되요? 성은 빼고 적어주세요 =)";
}

function init() {
  loadName();
  input.addEventListener("click", inputFocus);
  input.addEventListener("blur", inputFocusout);
}

init();
