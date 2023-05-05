// // Получаем элементы формы
// const form = document.querySelector('#contact-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const messageInput = document.querySelector('#message');
// const submitButton = document.querySelector('#submit');

// // Добавляем слушатель событий на отправку формы
// form.addEventListener('submit', (event) => {
//   // Отменяем отправку формы по умолчанию
//   event.preventDefault();

//   // Проверяем поля формы
//   let errors = false;

//   // Проверяем поле "Имя"
//   if (nameInput.value === '') {
//     nameInput.classList.add('error');
//     errors = true;
//   } else {
//     nameInput.classList.remove('error');
//   }

//   // Проверяем поле "Email"
//   const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegExp.test(emailInput.value)) {
//     emailInput.classList.add('error');
//     errors = true;
//   } else {
//     emailInput.classList.remove('error');
//   }

//   // Проверяем поле "Сообщение"
//   if (messageInput.value === '') {
//     messageInput.classList.add('error');
//     errors = true;
//   } else {
//     messageInput.classList.remove('error');
//   }

//   // Если есть ошибки, прерываем отправку формы
//   if (errors) {
//     return;
//   }

//   // Отправляем форму
//   form.submit();
// });




// document.querySelector(document).ready(function () {
//     document.querySelector('.hamburger').addEventListener('click', function () {
//         document.querySelector(this).classList.toggle('is-active');
//     });
// });


function changeTheme() {
    const toggleTheme = document.querySelector('.sun');
    let el = document.documentElement;

    toggleTheme.addEventListener('click', () => {

        if (el.hasAttribute('data-theme')) {
            el.removeAttribute('data-theme');
            localStorage.removeItem('theme');

        } else {
            el.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }

    });

    if(localStorage.getItem('theme') !== null){
        el.setAttribute('data-theme', 'dark');
    }
}

changeTheme();

const openMenu = document.querySelector(".row");
const closeMenu = document.querySelector(".close");
const mobileMenu = document.querySelector(".mob_header_links");

openMenu.addEventListener('click', ()=> {

    mobileMenu.style.display = 'block';
    openMenu.style.display = 'none';
})

closeMenu.addEventListener('click', ()=> {

    mobileMenu.style.display = 'none';
    openMenu.style.display = 'block';
})