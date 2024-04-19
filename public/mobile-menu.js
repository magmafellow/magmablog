console.log('-=mobile-menu script loaded=-')

const mobileMenu = document.querySelector('.mobile-menu')
const header = document.querySelector('header')

mobileMenu.addEventListener('click', function(e){
  header.classList.toggle('active-mobile-menu')
})
