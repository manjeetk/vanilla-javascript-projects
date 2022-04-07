const humburger = document.querySelector('.logo');
const navbar = document.querySelector('nav');

humburger.addEventListener('click', (e) => {
  navbar.classList.toggle('open')
  humburger.classList.toggle('open')
});