const A = document.querySelector.bind(document);
const AA = document.querySelectorAll.bind(document);

const icon = A('.ti-align-right');
const jsMap = A('.js-map')
const map = A('.map__container');

// icon.style.color = 'red'

icon.onclick = () => {
    Object.assign(map.style, {
        transform: 'translateX(0%)',
    })
}

jsMap.onclick = () => {
    Object.assign(map.style, {
        transform: 'translateX(0%)',
        width: '100%',
    })
}

// Object.assign(icon.style, {
//     color: 'red',
//     width: '100px',
//     fontSize: '50px'
// })

const close = A('.ti-close');


close.onclick = () => {
    Object.assign(map.style, {
        transform: 'translateX(110%)',
    })
};

const search = A('.ti-search');
const modal = A('.modal');
const modalBody = A('.modal__body');



search.onclick = () => {
    modal.classList.add('open');
}

modal.onclick = () => {
    modal.classList.remove('open');

}

modalBody.onclick = (e) => {
    e.stopPropagation()
}

const btnAlls = AA('.btn.btn-outline-info');


btnAlls.forEach((btn, index) => {
    btn.onclick = function () {
        A('.form__container').classList.add('open')
    }
})

const formClose = A('.form__container--icon');

formClose.onclick = () => {
    A('.form__container').classList.remove('open')
}

const searchMobile = A('.js-search');

searchMobile.onclick = () => {
    modal.classList.add('open');
}





