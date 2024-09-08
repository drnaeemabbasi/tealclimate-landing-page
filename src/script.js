// Navbar menu
document.querySelectorAll(".menu-toggle").forEach((element) => {
  element.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  });
});

// Carousel
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselIndicators = document.querySelectorAll(".carousel-indicator");
const carouselIndicatorsWrapper = document.querySelector(
  ".carousel-indicator-wrapper",
);

let currentCarouselItem = 0;
let nextCarouselItem = currentCarouselItem;
let isAnimating = false;
const animationDuration = 500;
let animationQueue = [];

const updateCarousel = () => {
  isAnimating = true;

  carouselItems.forEach((carouselItem, index) => {
    carouselItem.style.transform = `translateX(${(index - currentCarouselItem) * 100}%)`;
  });

  carouselIndicators.forEach((carouselIndicator, index) => {
    if (currentCarouselItem === index) {
      carouselIndicator.classList.add("bg-tc-green");
      carouselIndicator.classList.remove("bg-tc-grey");
    } else {
      carouselIndicator.classList.remove("bg-tc-green");
      carouselIndicator.classList.add("bg-tc-grey");
    }
  });

  setTimeout(() => {
    isAnimating = false;
    if (animationQueue.length > 0) {
      currentCarouselItem = animationQueue.shift();
      updateCarousel();
    }
  }, animationDuration);
};

const handleCarouselControl = (direction) => {
  if (direction === "left") {
    nextCarouselItem =
      nextCarouselItem === 0 ? carouselItems.length - 1 : nextCarouselItem - 1;
  } else if (direction === "right") {
    nextCarouselItem =
      nextCarouselItem === carouselItems.length - 1 ? 0 : nextCarouselItem + 1;
  }
  if (!isAnimating) {
    currentCarouselItem = nextCarouselItem;
    updateCarousel();
  } else {
    animationQueue.push(nextCarouselItem);
  }
};

// Carousel control left
document
  .querySelector("#carousel-control-left")
  .addEventListener("click", () => {
    handleCarouselControl("left");
  });

// Carousel control right
document
  .querySelector("#carousel-control-right")
  .addEventListener("click", () => {
    handleCarouselControl("right");
  });

// Initial carousel setup
updateCarousel();
carouselIndicatorsWrapper.addEventListener("click", (event) => {
  const target = event.target;
  if (
    carouselIndicatorsWrapper.contains(target) &&
    target !== carouselIndicatorsWrapper
  ) {
    const children = Array.from(carouselIndicatorsWrapper.children);
    const index = children.indexOf(target);
    currentCarouselItem = index;
    if (!isAnimating) {
      updateCarousel();
    } else {
      animationQueue.push(currentCarouselItem);
    }
  }
});
