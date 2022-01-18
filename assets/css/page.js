const A = document.querySelector.bind(document);
const AA = document.querySelectorAll.bind(document);

const modal1 = A('.modal');
const authForm2 = A('.auth-form2');
const authForm1 = A('.auth-form1');
const headerNav = A('.header__navbar');




A('.header__user').onclick = () => {
    modal1.classList.add('open');
    authForm2.classList.add('open')
}

A('.auth-form--register.active').onclick = function () {
    authForm2.classList.remove('open');
    authForm1.classList.add('open')
}

A('.js-login').onclick = () => {
    authForm1.classList.remove('open');
    authForm2.classList.add('open')
}

const iconMobile = AA('.mobile-icon');

for (a = 0; a < iconMobile.length; a++) {
    iconMobile[1].onclick = function () {
        modal1.classList.add('open');
        authForm2.classList.add('open')
    }
    iconMobile[0].onclick = function () {
        if (headerNav == A('.header__navbar.open')) {
            headerNav.classList.remove('open')
        }
        else {
            headerNav.classList.add('open')

        }
    }
}

const modalOverlay = document.querySelector('.modal__overlay');

modalOverlay.onclick = function () {
    authForm1.classList.remove('open');
    authForm2.classList.remove('open');
    modal1.classList.remove('open');

}




// mobile

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

const navbarMobile = A('.sub-header-list--mobile');

const headerNavList = AA('.js-listMobile');

for (Nav = 0; Nav < headerNavList.length; Nav++) {
    headerNavList[Nav].onclick = function () {
        navbarMobile.classList.toggle('open')
    }
}



