window.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const exitIcon = document.querySelector('.exit-icon');

    menuIcon.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            navMenu.classList.toggle('show');
            navMenu.classList.toggle('hide');
        }
    });

    exitIcon.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            navMenu.classList.remove('show');
            navMenu.classList.add('hide');
        }
    });

    // window.addEventListener('resize', () => {
    //     checkWidthAndSetMenuState();
    // });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".fa-magnifying-glass");
    const searchBox = document.getElementById("search-box");

    searchIcon.addEventListener("click", function () {
        searchBox.classList.toggle("show");
    });
});

