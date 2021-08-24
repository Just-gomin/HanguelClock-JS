const clockContainer = document.querySelector(".clock"),
  tdMorning = clockContainer.querySelector("#clockMorning"),
  tdMin = clockContainer.querySelector("#Min"),
  tdNoon = clockContainer.querySelector("#clockNoon"),
  tdsOfHour = clockContainer.querySelectorAll(".clock__txt-hours"),
  tdsOfMinute = clockContainer.querySelectorAll(".clock__txt-mins");

const TXT_BRIGHTER = "text-brighter";

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let halfday = hours >= 12 ? "오후" : "오전";
  let hour = hours > 12 ? hours - 12 : hours;

  let timeInfo = {
    halfday: halfday,
    hour: hour,
    minute: minutes,
  };

  return timeInfo;
}

function paintHalfDay(halfDay) {
  if (halfDay === "오전") {
    tdNoon.classList.remove(TXT_BRIGHTER);
    tdMorning.classList.add(TXT_BRIGHTER);
  } else {
    tdNoon.classList.add(TXT_BRIGHTER);
    tdMorning.classList.remove(TXT_BRIGHTER);
  }
}

function paintHour(hour) {
  const targetTD = clockContainer.querySelector(`#Hour${hour}`);
  tdsOfHour.forEach((td) => td.classList.remove(TXT_BRIGHTER));
  targetTD.classList.add(TXT_BRIGHTER);

  if (hour === 0) {
    clockContainer.querySelector("#Hour10").classList.add(TXT_BRIGHTER);
    clockContainer.querySelector("#Hour12").classList.add(TXT_BRIGHTER);
    return;
  }

  if (hour >= 5 && hour <= 9) {
    const setTD = clockContainer.querySelector(`#Hour${hour}set`);
    setTD.classList.add(TXT_BRIGHTER);
    return;
  }

  if (hour === 11 || hour === 12) {
    clockContainer.querySelector("#Hour10").classList.add(TXT_BRIGHTER);
    return;
  }
}

function paintMinute(minute) {
  const base10Min = Math.floor(minute / 10);
  const base1Min = minute % 10;

  tdsOfMinute.forEach((td) => td.classList.remove(TXT_BRIGHTER));

  if (minute === 0) {
    tdMin.classList.remove(TXT_BRIGHTER);
    return;
  } else {
    if (base10Min > 0) {
      clockContainer.querySelector("#Min10").classList.add(TXT_BRIGHTER);
      if (base10Min > 1) {
        clockContainer
          .querySelector(`#Min${base10Min}0`)
          .classList.add(TXT_BRIGHTER);
      }
    }

    if (base1Min > 0) {
      clockContainer
        .querySelector(`#Min${base1Min}`)
        .classList.add(TXT_BRIGHTER);
    }
    tdMin.classList.add(TXT_BRIGHTER);
  }
}

function paintclock() {
  const timeInfo = getTime();
  paintHalfDay(timeInfo.halfday);
  paintHour(timeInfo.hour);
  paintMinute(timeInfo.minute);
}

function init() {
  paintclock();
  setInterval(paintclock, 1000);
}

init();
console.log(typeof tdsOfHour);
