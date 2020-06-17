const btn_namechanger = document.querySelector(".namechanger");

function namechange() {
  localStorage.removeItem("user");
  location.reload();
}

function init() {
  btn_namechanger.addEventListener("click", namechange);
}

init();
