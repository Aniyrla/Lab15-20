// Обработчик отправки формы
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Останавливаем отправку формы для валидации

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const subscribe = document.getElementById("subscribe").checked;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;
    const country = document.getElementById("country").value;
    
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";  // Очищаем старые ошибки
    let errors = [];

    // Валидация на пустое имя
    if (!username) {
        errors.push("Имя не может быть пустым.");
    }

    // Валидация на пустую электронную почту
    if (!email || !validateEmail(email)) {
        errors.push("Введите корректный адрес электронной почты.");
    }

    // Валидация на выбор пола
    if (!gender) {
        errors.push("Пожалуйста, выберите ваш пол.");
    }

    // Валидация на выбор страны
    if (!country) {
        errors.push("Пожалуйста, выберите страну.");
    }

    // Если есть ошибки, выводим их
    if (errors.length > 0) {
        errors.forEach(function(error) {
            const errorElement = document.createElement("p");
            errorElement.textContent = error;
            errorMessages.appendChild(errorElement);
        });
    } else {
        // Применение регулярных выражений для анализа введенных данных
        const resultMessage = `Имя: ${username}<br>Электронная почта: ${email}<br>Подписка на новости: ${subscribe ? 'Да' : 'Нет'}<br>Пол: ${gender}<br>Страна: ${country}`;
        displayResult(resultMessage);

        // Пример использования регулярных выражений и методов
        demonstrateRegExp(email);  // Проверка email с использованием RegExp
    }
});

// Функция для валидации email с использованием регулярных выражений
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

// Функция для демонстрации различных методов работы с RegExp
function demonstrateRegExp(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // 1. test() - проверка на соответствие регулярному выражению
    const isEmailValid = emailRegex.test(email);
    console.log("test():", isEmailValid ? "Корректный email" : "Некорректный email");

    // 2. exec() - извлекаем подробности о первом совпадении
    const matchExec = emailRegex.exec(email);
    console.log("exec():", matchExec ? matchExec[0] : "Нет совпадений");

    // 3. split() - разделяем строку по регулярному выражению
    const parts = email.split('@');
    console.log("split():", parts);

    // 4. match() - находим все совпадения с регулярным выражением
    const matchResult = email.match(emailRegex);
    console.log("match():", matchResult ? matchResult[0] : "Нет совпадений");

    // 5. search() - ищем позицию первого совпадения
    const searchResult = email.search(emailRegex);
    console.log("search():", searchResult !== -1 ? `Найдено на позиции ${searchResult}` : "Нет совпадений");

    // 6. replace() - заменяем совпадения
    const replacedEmail = email.replace(emailRegex, "<strong>Заменено</strong>");
    console.log("replace():", replacedEmail);
}

// Функция для вывода результатов на страницу
function displayResult(resultMessage) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = resultMessage;
}
function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error")) {
      error = document.createElement("div");
      error.className = "error";
      input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
  }
  
  // Функция для очистки ошибки
  function clearError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains("error")) {
      error.remove();
    }
  }

const country = document.getElementById("country").value;
    if (!country) {
      isValid = false;
      showError(document.getElementById("country"));
    } else {
      clearError(document.getElementById("country"));
    }

// Функция для установки cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));  // срок действия cookie
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";  // добавляем путь для доступности cookie на всем сайте
}

// Пример использования: сохранение данных формы в cookie
function saveFormDataToCookie(username, email, subscribe, gender, country) {
  const formData = JSON.stringify({ username, email, subscribe, gender, country });
  setCookie('formData', formData, 7);  // Сохраняем данные на 7 дней
}

// Слушатель события на отправку формы
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Останавливаем отправку формы для валидации

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const subscribe = document.getElementById("subscribe").checked;
  const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;
  const country = document.getElementById("country").value;
  
  const errorMessages = document.getElementById("errorMessages");
  errorMessages.innerHTML = "";  // Очищаем старые ошибки
  let errors = [];

  // Валидация данных...
  if (errors.length > 0) {
      // Выводим ошибки
      errors.forEach(function(error) {
          const errorElement = document.createElement("p");
          errorElement.textContent = error;
          errorMessages.appendChild(errorElement);
      });
  } else {
      // Если ошибок нет, сохраняем данные в cookie
      const formData = { username, email, subscribe, gender, country };
      
      // Сохраняем в cookie
      saveFormDataToCookie(username, email, subscribe, gender, country);

      // Отображаем результат
      const resultMessage = `Имя: ${username}<br>Электронная почта: ${email}<br>Подписка на новости: ${subscribe ? 'Да' : 'Нет'}<br>Пол: ${gender}<br>Страна: ${country}`;
      displayResult(resultMessage);
  }
});

// Функция для вывода результатов на страницу
function displayResult(resultMessage) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = resultMessage;
}
// Функция для получения cookie по имени
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
      }
  }
  return null;
}

// Проверяем, что cookie установлено
console.log(getCookie('formData'));

// Функция для сохранения данных в LocalStorage
function saveDataToLocalStorage(username, email, subscribe, gender, country) {
  const formData = { username, email, subscribe, gender, country };
  localStorage.setItem('formData', JSON.stringify(formData));  // Сохраняем в LocalStorage
  console.log('Данные сохранены в LocalStorage');
}

// Функция для получения данных из LocalStorage
function getDataFromLocalStorage() {
  const formData = localStorage.getItem('formData');
  return formData ? JSON.parse(formData) : null;  // Если данные есть, парсим JSON, если нет - возвращаем null
}

// Функция для отображения данных на странице
function displayResult(resultMessage) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = resultMessage;
}

// Обработчик отправки формы
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Останавливаем отправку формы для валидации

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const subscribe = document.getElementById("subscribe").checked;
  const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;
  const country = document.getElementById("country").value;
  
  const errorMessages = document.getElementById("errorMessages");
  errorMessages.innerHTML = "";  // Очищаем старые ошибки
  let errors = [];

  // Валидация данных...
  if (!username) {
      errors.push("Имя не может быть пустым.");
  }
  if (!email || !validateEmail(email)) {
      errors.push("Введите корректный адрес электронной почты.");
  }
  if (!gender) {
      errors.push("Пожалуйста, выберите ваш пол.");
  }
  if (!country) {
      errors.push("Пожалуйста, выберите страну.");
  }

  // Если есть ошибки, выводим их
  if (errors.length > 0) {
      errors.forEach(function(error) {
          const errorElement = document.createElement("p");
          errorElement.textContent = error;
          errorMessages.appendChild(errorElement);
      });
  } else {
      // Если ошибок нет, сохраняем данные в LocalStorage
      saveDataToLocalStorage(username, email, subscribe, gender, country);

      // Отображаем результат
      const resultMessage = `Имя: ${username}<br>Электронная почта: ${email}<br>Подписка на новости: ${subscribe ? 'Да' : 'Нет'}<br>Пол: ${gender}<br>Страна: ${country}`;
      displayResult(resultMessage);
  }
});

// Функция для валидации email
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

// Проверка на наличие данных в LocalStorage при загрузке страницы
window.onload = function() {
  const savedData = getDataFromLocalStorage();
  if (savedData) {
      // Если данные есть в LocalStorage, отображаем их
      const resultMessage = `Имя: ${savedData.username}<br>Электронная почта: ${savedData.email}<br>Подписка на новости: ${savedData.subscribe ? 'Да' : 'Нет'}<br>Пол: ${savedData.gender}<br>Страна: ${savedData.country}`;
      displayResult(resultMessage);
  }
};