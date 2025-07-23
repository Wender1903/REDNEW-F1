export function menuHamburguer(acao, menuHamb, btnHamb) {
    if (acao > 0) {
        menuHamb.classList.remove('menu-hamb-close');
        menuHamb.classList.add('active-hamb', 'menu-hamb-open');
        btnHamb.classList.add('close-hamb');
    } else if (acao < 0) {
        menuHamb.classList.remove('menu-hamb-open');
        menuHamb.classList.add('menu-hamb-close');
        btnHamb.classList.remove('close-hamb');

        setTimeout(() => {
            menuHamb.classList.remove('active-hamb');
        }, 600);
    }
}
