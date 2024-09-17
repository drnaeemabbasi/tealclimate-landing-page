const mobileNav = document.querySelector(".mobile-nav");
const navBtn = document.querySelector("#navBtn");

let isActive = false;
navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active")
});


gsap.to("#myPhotoSection", {
  scale: 1.2, 
  borderRadius: "0%", 
  scrollTrigger: {
    trigger: "#myPhotoSection",
    start: "top top", 
    end: "bottom 50%",
    scrub: 2,
  },
});
