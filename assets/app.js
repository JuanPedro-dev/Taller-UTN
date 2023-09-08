let menu = document.querySelector(".navbar-toggler"); 

function toggleNavBar(){
    let spanHamburger = document.querySelectorAll(".navbar-toggler-icon"); ;
    
    spanHamburger[0].classList.toggle("navbar-toggler-icon1_open");
    spanHamburger[1].classList.toggle("navbar-toggler-icon2_open");
    spanHamburger[2].classList.toggle("navbar-toggler-icon3_open");

    document.querySelector(".navbar--nav").classList.toggle("d-flex");
}

menu.addEventListener("click", toggleNavBar); 




