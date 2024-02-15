let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.click = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
