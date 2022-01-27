const form = document.querySelector('.contact-form');
const errorMessage = document.querySelector('.error-message');
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

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

const button = document.querySelector('form .button');
button.addEventListener('click', () => {
  const formData = {
    Name: nameInput.value,
    Email: email.value,
    Message: message.value,
  };
  localStorage.setItem('data', JSON.stringify(formData));
});
let storedData = localStorage.getItem('data'); storedData = JSON.parse(storedData);
window.onload = () => {
  if (storedData) {
    nameInput.value = storedData.Name;
    email.value = storedData.Email;
    message.value = storedData.Message;
  }
};
