const sidebarOpenBtn = document.getElementById("sidebar-openBtn"),
  sidebarCloseBtn = document.getElementById("sidebar-closeBtn"),
  sidebar = document.getElementById("sidebar");

const dateChBox = document.getElementById("date-checkbox"),
  greetingChBox = document.getElementById("greeting-checkbox"),
  clockChBox = document.getElementById("clock-checkbox"),
  todoChBox = document.getElementById("todo-checkbox");

const SIDEBAR_BTN = {
  openBtn: {
    ON: "0.2",
    OFF: "0",
  },
  closeBtn: {
    ON: "showing-on",
    OFF: "showing-off",
  },
};

const SWITCH_STATUS_COLOR = {
  ON: "#2196f3",
  OFF: "#ccc",
};

const SECTION = {
  STATUS: {
    ON: "showing-on",
    OFF: "showing-off",
  },
};

const openSidebar = () => {
  sidebarOpenBtn.style.opacity = SIDEBAR_BTN.openBtn.OFF;

  sidebarCloseBtn.classList.remove(SIDEBAR_BTN.closeBtn.OFF);
  sidebarCloseBtn.classList.add(SIDEBAR_BTN.closeBtn.ON);

  sidebar.style.width = "20%";
};

const closeSidebar = () => {
  sidebarOpenBtn.style.opacity = SIDEBAR_BTN.openBtn.ON;

  sidebarCloseBtn.classList.remove(SIDEBAR_BTN.closeBtn.ON);
  sidebarCloseBtn.classList.add(SIDEBAR_BTN.closeBtn.OFF);

  sidebar.style.width = "0px";
};

const turnOnSection = (section) => {
  const target = document.getElementById(section);
  target.classList.remove(SECTION.STATUS.OFF);
  target.classList.add(SECTION.STATUS.ON);
};

const turnOffSection = (section) => {
  const target = document.getElementById(section);
  target.classList.remove(SECTION.STATUS.ON);
  target.classList.add(SECTION.STATUS.OFF);
};

const toggleListener = (event) => {
  const tSwitch = event.target;

  const tSwitchBg = tSwitch.parentNode;

  if (tSwitch.checked) {
    tSwitchBg.style.backgroundColor = SWITCH_STATUS_COLOR.ON;
    turnOnSection(tSwitch.value);
  } else {
    tSwitchBg.style.backgroundColor = SWITCH_STATUS_COLOR.OFF;
    turnOffSection(tSwitch.value);
  }
};

const sidebarInit = () => {
  sidebarOpenBtn.addEventListener("click", openSidebar);
  sidebarCloseBtn.addEventListener("click", closeSidebar);

  dateChBox.addEventListener("click", toggleListener);
  greetingChBox.addEventListener("click", toggleListener);
  clockChBox.addEventListener("click", toggleListener);
  todoChBox.addEventListener("click", toggleListener);

  if (dateChBox.checked) {
    dateChBox.parentNode.style.backgroundColor = SWITCH_STATUS_COLOR.ON;
    turnOnSection(dateChBox.value);
  } else {
    turnOffSection(dateChBox.value);
  }

  if (greetingChBox.checked) {
    greetingChBox.parentNode.style.backgroundColor = SWITCH_STATUS_COLOR.ON;
    turnOnSection(greetingChBox.value);
  } else {
    turnOffSection(greetingChBox.value);
  }

  if (clockChBox.checked) {
    clockChBox.parentNode.style.backgroundColor = SWITCH_STATUS_COLOR.ON;
    turnOnSection(clockChBox.value);
  } else {
    turnOffSection(clockChBox.value);
  }

  if (todoChBox.checked) {
    todoChBox.parentNode.style.backgroundColor = SWITCH_STATUS_COLOR.ON;
    turnOnSection(todoChBox.value);
  } else {
    turnOffSection(todoChBox.value);
  }
};

sidebarInit();
