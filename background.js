const body = document.querySelector("body");

const totalImgNumber = 6;

function paintBackground(imgNum) {
  const background = new Image();
  background.src = `images/${imgNum}.jpg`;
  background.classList.add("backgroundIMG"); // Image에 CSS 적용을 위해 클래스 명 추가
  body.appendChild(background); // Body태그 아래에 생성한 Image 추가
}

function generateRandomNum() {
  const number = Math.floor(Math.random() * totalImgNumber + 1);
  return number;
}

function init() {
  const randomNum = generateRandomNum();
  paintBackground(randomNum);
}

init();
