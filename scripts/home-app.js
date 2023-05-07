
function contactForm(){

    const form = document.getElementById("contact-form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validateForm()) {
        // Send form data to server or do something with it here
        console.log("Form submitted successfully!");
        form.reset();
      }
    });
    
    function validateForm() {
      let isValid = true;
      const nameValue = name.value.trim();
      const emailValue = email.value.trim();
      const messageValue = message.value.trim();
    
      if (nameValue === "") {
        nameError.innerText = "Name is required";
        isValid = false;
      } else {
        nameError.innerText = "";
      }
    
      if (emailValue === "") {
        emailError.innerText = "Email is required";
        isValid = false;
      } else if (!isValidEmail(emailValue)) {
        emailError.innerText = "Invalid email address";
        isValid = false;
      } else {
        emailError.innerText = "";
      }
    
      if (messageValue === "") {
        messageError.innerText = "Message is required";
        isValid = false;
      } else {
        messageError.innerText = "";
      }
    
      return isValid;
    }
    
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
}


contactForm()



function isOpenMenu() {
    const openMenu = document.querySelector(".row");
    const closeMenu = document.querySelector(".close");
    const mobileMenu = document.querySelector(".mob_header_links");

    openMenu.addEventListener('click', () => {

        mobileMenu.style.display = 'block';
        openMenu.style.display = 'none';
    })

    closeMenu.addEventListener('click', () => {

        mobileMenu.style.display = 'none';
        openMenu.style.display = "block";
    })

}

isOpenMenu();


function changeTheme() {
    const toggleTheme = document.querySelectorAll('.sun');
    let el = document.documentElement;

    toggleTheme.forEach((toggleTheme) => {

        toggleTheme.addEventListener('click', () => {
            if (el.hasAttribute('data-theme')) {
                el.removeAttribute('data-theme');
                localStorage.removeItem('theme');

            } else {
                el.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        })

    })

    // toggleTheme.addEventListener('click', () => {

    //     if (el.hasAttribute('data-theme')) {
    //         el.removeAttribute('data-theme');
    //         localStorage.removeItem('theme');

    //     } else {
    //         el.setAttribute('data-theme', 'dark');
    //         localStorage.setItem('theme', 'dark');
    //     }

    // });

    if (localStorage.getItem('theme') !== null) {
        el.setAttribute('data-theme', 'dark');
    }
}

changeTheme();
