(function () {

    document.addEventListener('DOMContentLoaded', function () {

        var navLink = document.querySelectorAll('.nav__link');

        setTimeout(function () {
            for (var i = 0; i < navLink.length; i++) {
                navLink[i].classList.add('loaded');
            }
        }, 300);

    });

})();