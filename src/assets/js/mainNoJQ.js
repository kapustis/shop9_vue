(function () {
    'use strict';

    document.addEventListener("DOMContentLoaded", () => {

        /****======  Sticky Header ======*******/
        let scrollPosition = window.scrollY;
        let header = document.querySelector(".sticy-header");

        if (scrollPosition >= 400) {
            header.classList.add('animated', 'fadeInDown', 'fixed');
        }

        window.addEventListener('scroll', function () {
            if (window.scrollY < 400) {
                header.classList.remove('animated', 'fadeInDown', 'fixed');
            } else {
                header.classList.add('animated', 'fadeInDown', 'fixed');
            }
        });

    });
})();
