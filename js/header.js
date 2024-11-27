document.addEventListener("DOMContentLoaded", function () {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document
        .getElementById("header-placeholder")
        .insertAdjacentHTML("beforeend", data);

      initializeBurgerMenu();
    });

  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document
        .getElementById("footer-placeholder")
        .insertAdjacentHTML("beforeend", data);
    });
});

function initializeBurgerMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".menu__close");

  if (burgerMenu && menuOverlay && closeMenu && menu) {
    burgerMenu.addEventListener("click", () => {
      const burgerRect = burgerMenu.getBoundingClientRect();

      closeMenu.style.position = "fixed";
      closeMenu.style.top = burgerRect.top + "px";
      closeMenu.style.left = burgerRect.left + "px";
      closeMenu.style.width = burgerMenu.offsetWidth + "px";
      closeMenu.style.height = burgerMenu.offsetHeight + "px";
      closeMenu.style.zIndex = 101;

      menuOverlay.classList.add("open");
      menu.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
      menu.classList.remove("open");
      menuOverlay.classList.remove("open");
    });
  } else {
    console.error("Елементи меню не знайдені");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.querySelector(".marquee");
  const marqueeText = document.querySelector(".marquee span");

  marqueeText.innerHTML += marqueeText.innerHTML;

  let marqueeWidth = marqueeText.offsetWidth / 2;
  let currentPosition = 0;

  function animateMarquee() {
    if (Math.abs(currentPosition) >= marqueeWidth) {
      currentPosition = 0;
    } else {
      currentPosition -= 0.5;
    }
    marquee.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(animateMarquee);
  }

  animateMarquee();
});
