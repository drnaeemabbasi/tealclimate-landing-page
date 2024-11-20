

document.addEventListener("DOMContentLoaded", () => {
  const mobileNav = document.querySelector(".mobile-nav");
  const navBtn = document.querySelector("#navBtn");

  navBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")
  });
  function toggleAccordion(index) {
    const allContents = document.querySelectorAll('[id^="content-"]');
    const allIcons = document.querySelectorAll('[id^="icon-"]');

    // SVG for Down icon
    const upSVG = `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="12.5" fill="white" stroke="#BAB5B5"/>
        <path d="M6 10L13 17L20 10" stroke="#BAB5B5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    // SVG for Up icon
    const downSVG = `
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="12.5" fill="white" stroke="#BAB5B5"/>
        <path d="M6 16L13 9L20 16" stroke="#BAB5B5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    // Close all accordion items
    allContents.forEach((content, idx) => {
      if (idx + 1 !== index) {
        content.style.maxHeight = '0';
        allIcons[idx].innerHTML = upSVG;
      }
    });

    // Toggle the selected accordion item
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = upSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = downSVG;
    }
  }

  // Make the function globally accessible
  window.toggleAccordion = toggleAccordion;
});
