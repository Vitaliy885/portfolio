(function () {

    document.addEventListener('DOMContentLoaded', function () {

        var navLink = document.querySelectorAll('.nav__link');

        setTimeout(function () {
            for (var i = 0; i < navLink.length; i++) {
                navLink[i].classList.add('loaded');
            }
        }, 300);

    });

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        document.write("mobile device");
    }else{
        // false for not mobile device
        document.write("not mobile device");
    }

})();