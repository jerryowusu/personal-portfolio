const html = document.getElementsByTagName('html')[0];
const navMenu = document.querySelector('.item-navigation');
const showBtn = document.querySelector('nav .show-menu-btn');
const closedBtn = document.querySelector('nav .close-menu-btn');
const navlinks = document.querySelectorAll('nav ul li');

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
