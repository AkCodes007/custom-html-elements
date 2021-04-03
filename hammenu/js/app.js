const container = document.querySelector('.container');
const hamButton = document.querySelector('.menu-btn__hamburger');

hamButton.addEventListener('click', () => {
  hamButton.classList.toggle('active');
});
