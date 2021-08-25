const sidebarOpenBtn = document.getElementById("sidebar-openBtn"),
  sidebarCloseBtn = document.getElementById("sidebar-closeBtn"),
  sidebar = document.getElementById("sidebar");

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

const openSidebar = () => {
  sidebarOpenBtn.style.opacity = SIDEBAR_BTN.openBtn.OFF;

  sidebarCloseBtn.classList.remove(SIDEBAR_BTN.closeBtn.OFF);
  sidebarCloseBtn.classList.add(SIDEBAR_BTN.closeBtn.ON);

  sidebar.style.width = "25%";
};

const closeSidebar = () => {
  sidebarOpenBtn.style.opacity = SIDEBAR_BTN.openBtn.ON;

  sidebarCloseBtn.classList.remove(SIDEBAR_BTN.closeBtn.ON);
  sidebarCloseBtn.classList.add(SIDEBAR_BTN.closeBtn.OFF);

  sidebar.style.width = "0px";
};

const sidebarInit = () => {
  console.log("sidebarInit");
  sidebarOpenBtn.addEventListener("click", openSidebar);
  sidebarCloseBtn.addEventListener("click", closeSidebar);
};

sidebarInit();
