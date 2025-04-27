let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => { 
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeSearch = document.querySelector('#close');

searchIcon.onclick = () => {
    searchForm.classList.add('active');
}

closeSearch.onclick = () => {
    searchForm.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});