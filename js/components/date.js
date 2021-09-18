import { getCurrentTime } from "../utils/time.js";

const dateContainer = document.querySelector(".date"),
  dateTxt = dateContainer.querySelector(".date__txt");

const setDate = () => {
  const time = getCurrentTime();
  dateTxt.textContent = `${time.year}년 ${time.month}월 ${time.day}일`;
};

const dateInit = () => {
  setInterval(setDate, 1000);
};

export { dateInit };
