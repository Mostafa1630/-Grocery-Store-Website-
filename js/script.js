let iconSearch = document.getElementById("search-btn");
let formSearch = document.querySelector(".search-form");
let cartBtn = document.getElementById("cart-btn");
let shoppingCart = document.querySelector(".shopping-cart");
let loginBtn = document.getElementById("login-btn");
let loginFrom = document.querySelector(".login-form");
let menuBtn = document.getElementById("menu-btn");
let navbar = document.querySelector(".navbar");


iconSearch.onclick = () => {
    formSearch.classList.toggle("active");
    shoppingCart.classList.remove("active");
    loginFrom.classList.remove("active");
    navbar.classList.remove("active");
}

cartBtn.onclick = () => {
    shoppingCart.classList.toggle("active");
    formSearch.classList.remove("active");
    loginFrom.classList.remove("active");
    navbar.classList.remove("active");
}

loginBtn.onclick = () => {
    loginFrom.classList.toggle("active");
    formSearch.classList.remove("active");
    shoppingCart.classList.remove("active");
    navbar.classList.remove("active");
}

menuBtn.onclick = () => {
    navbar.classList.toggle("active");
    formSearch.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginFrom.classList.remove("active");
}

window.onscroll = () =>{
    formSearch.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginFrom.classList.remove('active');
    menuBtn.classList.remove("active");
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});



var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});
