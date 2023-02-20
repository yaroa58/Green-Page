let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

/* Listening for a click event on the menu and when it is triggered, it toggles the class of the menu
and navbar. */
menu.addEventListener('click', function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

/* This is a scroll event listener. It is listening for the scroll event and when it is triggered, it
removes the class of the menu and navbar. */
window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});