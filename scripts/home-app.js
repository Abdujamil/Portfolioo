// Получаем элементы формы
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit');

// Добавляем слушатель событий на отправку формы
form.addEventListener('submit', (event) => {
  // Отменяем отправку формы по умолчанию
  event.preventDefault();
  
  // Проверяем поля формы
  let errors = false;

  // Проверяем поле "Имя"
  if (nameInput.value === '') {
    nameInput.classList.add('error');
    errors = true;
  } else {
    nameInput.classList.remove('error');
  }

  // Проверяем поле "Email"
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegExp.test(emailInput.value)) {
    emailInput.classList.add('error');
    errors = true;
  } else {
    emailInput.classList.remove('error');
  }

  // Проверяем поле "Сообщение"
  if (messageInput.value === '') {
    messageInput.classList.add('error');
    errors = true;
  } else {
    messageInput.classList.remove('error');
  }

  // Если есть ошибки, прерываем отправку формы
  if (errors) {
    return;
  }

  // Отправляем форму
  form.submit();
});