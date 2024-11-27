document.addEventListener("DOMContentLoaded", () => {
    const aboutContent = document.querySelector(".about-content");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutContent.classList.add("show"); // Добавляем класс для анимации
          }
        });
      },
      { threshold: 0.5 } // Секция видна на 50% для активации
    );
  
    observer.observe(aboutContent);
  });
  