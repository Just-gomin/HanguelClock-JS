import { getCurrentTime } from "../utils/time.js";

const dateContainer = document.querySelector(".date"),
  dateTxt = dateContainer.querySelector(".date__txt");

const setDate = () => {
  const { year, month, day } = getCurrentTime();
  dateTxt.textContent = `${year}년 ${month < 10 ? `0${month}` : month}월 ${
    day < 10 ? `0${day}` : day
  }일`;
};

const dateInit = () => {
  setInterval(setDate, 1000);
};

export { dateInit };
