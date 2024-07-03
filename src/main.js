window.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const exitIcon = document.querySelector('.exit-icon');

    const checkWidthAndSetMenuState = () => {
        if (window.innerWidth < 992) {
            navMenu.classList.add('hide');
            navMenu.classList.remove('show');
        } else {
            navMenu.classList.add('show');
            navMenu.classList.remove('hide');
        }
    };

    // Set initial state
    checkWidthAndSetMenuState();

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

    window.addEventListener('resize', () => {
        checkWidthAndSetMenuState();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".fa-magnifying-glass");
    const searchBox = document.getElementById("search-box");

    searchIcon.addEventListener("click", function () {
        searchBox.classList.toggle("show");
    });
});

