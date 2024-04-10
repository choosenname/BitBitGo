document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector('.burger');
    var mobileMenu = document.querySelector('.mobile-menu');
    var header = document.getElementById('header');

    burger.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            header.style.position = 'fixed';
            burger.innerHTML = '<img class="burger-icon" src="../assets/icons/cross.svg" alt="">'; // Меняем на крестик
        } else {
            header.style.position = 'relative';
            burger.innerHTML = '<img class="burger-icon" src="../assets/icons/burger-menu.svg" alt="">'; // Меняем обратно на иконку бургер-меню
        }
    });
});
