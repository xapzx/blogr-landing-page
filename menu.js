const subMenu = document.querySelectorAll('.expandable');
const navToggler = document.querySelector('.nav-toggler');
const navbar = document.querySelector('.navbar');

navToggler.addEventListener('click', () => {
    navbar.classList.toggle('collapse');
    if(navbar.classList.contains('collapse')) {
        navToggler.firstElementChild.src = "images/icon-hamburger.svg";
    } else {
        navToggler.firstElementChild.src = "images/icon-close.svg";
    }
    
});

subMenu.forEach(element => {
    element.addEventListener('click', () => {
        element.querySelector('.sub-menu').classList.toggle('expand');
    })
});