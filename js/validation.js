const form = document.querySelector('.contact-form');
const errorMessage = document.querySelector('.validateEmail');

form.addEventListener('submit', (event) => {
  event.preventDefault(); const { email } = form.elements;

  if (email.value === email.value.toLowerCase()) {
    form.submit();
  }

  else {
    errorMessage.classList.add('email-error');
    errorMessage.innerText = 'Please enter the email in lowercase';
    setTimeout(() => { errorMessage.classList.add('email-error'); }, 8000);
    event.preventDefault();
  }
});