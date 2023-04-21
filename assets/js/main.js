const burger = document.querySelector('.burger');
const menuHeaderList = document.querySelector('.menu-header__list');
const body = document.querySelector('body')

burger.addEventListener('click', function() {
  burger.classList.toggle('active');
  menuHeaderList.classList.toggle('show-menu');
  body.classList.toggle('hid');
})