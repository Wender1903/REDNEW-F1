
import { menuHamburguer } from './menu.js';
import { iniciarCarroussel } from './carroussel.js';

document.addEventListener('DOMContentLoaded', () => {
    const menuHamb = document.getElementById('menu-hamburguer');
    const btnHamb = document.getElementById('open-hamburguer');

    btnHamb.onclick = () => {
        const isOpen = menuHamb.classList.contains('active-hamb');
        menuHamburguer(isOpen ? -1 : 1, menuHamb, btnHamb);
    };

    const prevBtn = document.getElementById('carroussel-prev-btn');
    const nextBtn = document.getElementById('carroussel-next-btn');
    const carroussel = document.querySelector('.carroussel');

    iniciarCarroussel(carroussel, prevBtn, nextBtn);
});
