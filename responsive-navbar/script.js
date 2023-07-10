var navbar_items = document.querySelector(".navbar-item");
var hamburger = document.querySelector(".hamburger");
var navbarItemsResponsive = document.querySelector('.navbar-items-responsive');


hamburger.addEventListener('click' , function(){
    navbarItemsResponsive.classList.toggle('active');
});

