import { getCurrentTime } from "./utils.js";

const dateContainer = document.querySelector(".date"),
  dateTxt = dateContainer.querySelector(".date__txt");

const paintDate = () => {
  const time = getCurrentTime();
  dateTxt.textContent = `${time.year}년 ${time.month}월 ${time.day}일`;
};

const dateInit = () => {
  setInterval(paintDate, 1000);
};

export { dateInit };
