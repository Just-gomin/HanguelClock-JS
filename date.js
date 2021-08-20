const dateContainer = document.querySelector(".js-date-container"),
  dateTxt = dateContainer.querySelector(".dateTxt");

function paintDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  dateTxt.textContent = `${year}년 ${month < 10 ? `0${month}` : month}월 ${
    day < 10 ? `0${day}` : day
  }일`;
}

function init() {
  paintDate();
}

init();
