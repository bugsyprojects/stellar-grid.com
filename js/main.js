document.addEventListener("DOMContentLoaded", () => {
  // --- Карусель ---
  const carousel = document.querySelector(".testimonials__carousel");
  const prevButton = document.querySelector(".testimonials__button--prev");
  const nextButton = document.querySelector(".testimonials__button--next");

  if (carousel && prevButton && nextButton) {
    let currentIndex = 0; // Текущий индекс элемента карусели
    const totalItems = carousel.children.length; // Количество элементов в карусели

    // Обновление позиции карусели
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }

    // Обработчик кнопки "Назад"
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    });

    // Обработчик кнопки "Вперед"
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    });

    // Настройка CSS transition
    carousel.style.transition = "transform 0.5s ease";
  }

  // --- Анимации с GSAP ---
  if (typeof gsap !== "undefined") {
    gsap.from('.hero-title', { y: -50, opacity: 0, duration: 1 });
    gsap.from('.hero-subtitle', { y: 50, opacity: 0, duration: 1, delay: 0.3 });
    gsap.from('.hero-btn', { scale: 0.8, opacity: 0, duration: 0.7, delay: 0.5 });
    gsap.from('.hero-icons .icon', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      delay: 0.8,
    });
  } else {
    console.warn("GSAP is not loaded. Make sure to include GSAP in your project.");
  }
});




document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    const isOpen = parent.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));
    if (!isOpen) {
      parent.classList.add('open');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const timerElement = document.getElementById("timer");
  let timeLeft = 30; // Начальное время на таймере
  let countdown; // Переменная для хранения интервала

  // Функция для запуска таймера
  function startTimer() {
    timeLeft = 30; // Сбрасываем таймер
    timerElement.querySelector("span").textContent = timeLeft;

    countdown = setInterval(() => {
      timeLeft--;
      timerElement.querySelector("span").textContent = timeLeft;

      // Если таймер заканчивается
      if (timeLeft <= 0) {
        clearInterval(countdown); // Останавливаем текущий интервал
        startTimer(); // Перезапускаем таймер
      }
    }, 1000);
  }

  // Запускаем таймер при загрузке страницы
  startTimer();
});




document.addEventListener("DOMContentLoaded", () => {
  const choiceButtons = document.querySelectorAll(".choice-button");
  const resultElement = document.querySelector(".vampire-hunter__result");
  const gameBlock = document.querySelector(".game-block");
  const choicesContainer = document.querySelector(".vampire-hunter__choices");

  choiceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const choice = e.target.dataset.choice;

      if (choice === "weapon") {
        resultElement.textContent = "You chose a silver dagger. The perfect weapon for the hunt!";
      } else if (choice === "path") {
        resultElement.textContent = "You chose the path of shadows. Beware, danger awaits!";
        
        // Change the background for the path choice
        document.body.style.background = "url('/assets/images/dark-bg.webp') no-repeat center center/cover";
      }

      // Hide the choices buttons
      choicesContainer.style.display = "none";

      // Show the game block
      gameBlock.style.display = "block";
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Переключаем класс "open", чтобы показать/скрыть ответ
      item.classList.toggle("open");
    });
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Здесь можно добавить логику для реальной отправки данных, если необходимо

    // Скрыть форму
    form.style.display = "none";

    // Показать сообщение об успешной отправке
    successMessage.style.display = "block";

    // Через 3 секунды скрыть сообщение и восстановить форму
    setTimeout(() => {
      successMessage.style.display = "none";
      form.style.display = "block";
      form.reset(); // Сбросить все поля формы
    }, 3000); // Устанавливаем таймер на 3 секунды
  });
});
