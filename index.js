window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// ====================scrolling + - button======================================

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Select  icon
    const icon = faq.querySelector(".faqs-icon i");

    // Toggle plus and minus icons
    if (icon.className === "fa-regular fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-regular fa-plus";
    }
  });
});

//=======================Show/hide nav meanu================

const menu = document.getElementById("nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeMenu = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeMenu.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//close menu

const closenav = () => {
  menu.style.display = "none";
  closeMenu.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeMenu.addEventListener("click", closenav);
