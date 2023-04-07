const subMenu = document.querySelectorAll('.expandable');

subMenu.forEach(element => {
    element.addEventListener('click', () => {
        element.querySelector('.sub-menu').classList.toggle('expand');
    })
})