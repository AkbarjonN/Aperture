document.addEventListener("DOMContentLoaded",function () {
    let menu = document.getElementById("menu-btn");
    let list = document.querySelector(".nav__content-list");

    menu.addEventListener('click', function(){
        list.classList.toggle('show');
    });
});

