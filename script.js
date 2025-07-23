
let menuHamb = document.getElementById('menu-hamburguer')
let btnHamb = document.getElementById('open-hamburguer')

function menuHamburguer(acao) {
    if (acao > 0) {
        menuHamb.classList.add('active-hamb')
        btnHamb.classList.add('close-hamb')

    } else if (acao < 0) {
        menuHamb.classList.remove('active-hamb')
        btnHamb.classList.remove('close-hamb')

    }
}

btnHamb.onclick = () => {
    if (!menuHamb.classList.contains('active-hamb')) {
        menuHamburguer(1)
    } else {
        menuHamburguer(-1)

    }
}

let prevBtn = document.getElementById('carroussel-prev-btn')
let nextBtn = document.getElementById('carroussel-next-btn')
let carroussel = document.querySelector('.carroussel')
let carrousselItems = carroussel.querySelectorAll('.carroussel-list .carroussel-list-item')

let active = 0
let items = carrousselItems.length
let timer;

function trocarCarroussel(direction) {
    let carrousselActive = carroussel.querySelector('.carroussel-list .carroussel-list-item.active')
    carrousselActive.classList.remove('active')
    carrousselActive.classList.remove('anim-next', 'anim-prev')
    if (direction < 0) {
        active -= 1
        if (active < 0) {
            active = carrousselItems.length - 1
        }
        carrousselItems[active].classList.add('anim-prev')
        carrousselItems[active].classList.add('active')
    } else if (direction > 0) {
        active += 1

        if (active === carrousselItems.length) {
            active = 0
        }

        carrousselItems[active].classList.add('anim-next')
        carrousselItems[active].classList.add('active')
    }
}

function resetarIntervalo() {
    clearInterval(timer)
    timer = setInterval(() => {
        trocarCarroussel(1)
    }, 7000)
}

resetarIntervalo()

prevBtn.onclick = () => {
    trocarCarroussel(-1)
    resetarIntervalo()
}

nextBtn.onclick = () => {
    trocarCarroussel(1)
    resetarIntervalo()
}
