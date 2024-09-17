const mobileNav = document.querySelector(".mobile-nav");
const navBtn = document.querySelector("#navBtn");

navBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

let anchors = document.querySelectorAll("a");

// Add the 'duration-0' class initially
anchors.forEach((anchor) => {
  anchor.classList.add("duration-0");
});

// GSAP ScrollTrigger for #myPhotoSection
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

// GSAP Timeline
let tl = gsap.timeline({
  onComplete: () => {
    // Remove 'duration-0' class after the timeline completes
    anchors.forEach((anchor) => {
      anchor.classList.remove("duration-0");
    });
  },
});

tl.from(".logo", {
  x: -100,
  y: -100,
  ease: "back",
  opacity: 0,
  delay: 1,
})
  .from(".navBtn", {
    ease: "back",
    x: 100,
    y: -100,
    opacity: 0,
  })
  .from(".mobile-nav ul li", {
    opacity: 0,
    marginLeft: -100,
    ease: "back",
    stagger: { each: 0.3 },
  })
  .from(".head1", {
    y: -200,
    ease: "elastic",
    opacity: 0,
  })
  .from(".head1-btns a", {
    y: 200,
    ease: "elastic",
    opacity: 0,
    stagger: 0.2,
  })
  .from("#myPhotoSection", {
    scale: 0.8,
    borderRadius: "10%",
    ease: "elastic",
    opacity: 0,
    duration: 2,
  });
