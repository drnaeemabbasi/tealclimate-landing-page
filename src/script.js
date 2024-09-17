const mobileNav = document.querySelector(".mobile-nav");
const navBtn = document.querySelector("#navBtn");
navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});


gsap.to("#myPhotoSection", {
  scale: 1.2,                  // Scale the section to 1.5x
  borderRadius: "0%",           // Animate the border-radius to 0%
  scrollTrigger: {
    trigger: "#myPhotoSection", // Trigger when #myPhotoSection enters the viewport
    start: "top top",           // Start when the top of the section reaches the top of the viewport
    end: "bottom center",       // End the animation when the bottom reaches the center of the viewport
    scrub: 2,                // Smooth animation as the user scrolls
  }
});