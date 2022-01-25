const nav = document.querySelector('.nav');
const showBtn = document.querySelector('#hamburger');
const closedBtn = document.querySelector('.close-menu-btn');
const listMenu = document.querySelectorAll('.list-menu');

function showMenu() {
  nav.classList.add('navbar-mobile');
}

function closeMenu() {
  nav.classList.remove('navbar-mobile');
}

listMenu.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

showBtn.addEventListener('click', showMenu);
closedBtn.addEventListener('click', closeMenu);
