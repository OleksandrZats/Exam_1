const burger = document.querySelector(".header__burger");

burger.addEventListener("click", () => {
  document.body.classList.toggle("navigation-open");
});
