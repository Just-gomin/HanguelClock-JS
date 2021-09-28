import { getCurrentTime } from "../utils/time.js";

const clockContainer = document.querySelector(".clock"),
  tdAM = clockContainer.querySelector("#clockAM"),
  tdPM = clockContainer.querySelector("#clockPM"),
  tdMin = clockContainer.querySelector("#Min"),
  tdsHours = clockContainer.querySelectorAll(".clock__txt-hours"),
  tdsMins = clockContainer.querySelectorAll(".clock__txt-mins");

const AM = "오전",
  PM = "오후";

const CLK_TXT_ON = "clock__txt-on";

const paintHalfDay = (halfDay) => {
  if (halfDay === AM) {
    tdPM.classList.remove(CLK_TXT_ON);
    tdAM.classList.add(CLK_TXT_ON);
  } else {
    tdAM.classList.remove(CLK_TXT_ON);
    tdPM.classList.add(CLK_TXT_ON);
  }
};

const paintHour = (hour) => {
  if (hour === 0) {
    clockContainer.querySelector("#Hour10").classList.add(CLK_TXT_ON);
    clockContainer.querySelector("#Hour12").classList.add(CLK_TXT_ON);
    return;
  }

  const targetTD = clockContainer.querySelector(`#Hour${hour}`);

  tdsHours.forEach((td) => td.classList.remove(CLK_TXT_ON));
  targetTD.classList.add(CLK_TXT_ON);

  if (hour >= 5 && hour <= 9) {
    const setTD = clockContainer.querySelector(`#Hour${hour}set`);
    setTD.classList.add(CLK_TXT_ON);
    return;
  }

  if (hour === 11 || hour === 12) {
    clockContainer.querySelector("#Hour10").classList.add(CLK_TXT_ON);
    return;
  }
};

const paintMinute = (minute) => {
  const base1Min = minute % 10;
  const base10Min = (minute - base1Min) / 10;

  tdsMins.forEach((td) => td.classList.remove(CLK_TXT_ON));

  if (minute === 0) {
    tdMin.classList.remove(CLK_TXT_ON);
    return;
  } else {
    if (base10Min > 0) {
      clockContainer.querySelector("#Min10").classList.add(CLK_TXT_ON);
      if (base10Min > 1) {
        clockContainer
          .querySelector(`#Min${base10Min}0`)
          .classList.add(CLK_TXT_ON);
      }
    }

    if (base1Min > 0) {
      clockContainer.querySelector(`#Min${base1Min}`).classList.add(CLK_TXT_ON);
    }
    tdMin.classList.add(CLK_TXT_ON);
  }
};

const paintClock = () => {
  let { hour, minute } = getCurrentTime();

  const halfDay = hour < 12 ? AM : PM;
  hour = hour > 12 ? hour - 12 : hour;

  paintHalfDay(halfDay);
  paintHour(hour);
  paintMinute(minute);
};

const clockInit = () => {
  paintClock();
  setInterval(paintClock, 1000);
};

export { clockInit };
