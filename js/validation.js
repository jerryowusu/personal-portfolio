const form = document.querySelector('.contact-form');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('.email');

  if (email.value !== email.value.toLowerCase()) {
    errorMessage.classList.add('email-error');
    errorMessage.innerText = 'Please enter the email in small letters';
    setTimeout(() => {
      errorMessage.classList.remove('email-error');
      errorMessage.innerText = '';
    }, 5000);
    event.preventDefault();
  } else {
    form.submit();
  }
});
