const mobileNav = document.querySelector(".mobile-nav");
const navBtn = document.querySelector("#navBtn");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active")
});

