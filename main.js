const navmenu = document.querySelector('.nav_menu');
const close = document.querySelector('.close_icon ')
const burger = document.querySelector('#burger_icon ')
const intro = document.querySelector('.intro')


burger.addEventListener('click', () => {
    navmenu.classList.toggle('show');
    burger.style.display = 'none';
    close.style.display = "block";
    intro.style.backgroundImage = 'none';
})

close.addEventListener('click', () => {
    navmenu.classList.toggle('show');
    burger.style.display = 'block';
    close.style.display = "none";
    intro.style.backgroundImage = 'url("images/image-intro-mobile.jpg")';
})