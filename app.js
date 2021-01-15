(function () {
  let button = document.querySelector(".hamburger-icon");
  let menu = document.querySelector(".menu");

  button.addEventListener("click", openMenu);

  function openMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  }
})();
