export function iniciarCarroussel(carroussel, prevBtn, nextBtn) {
    let carrousselItems = carroussel.querySelectorAll('.carroussel-list .carroussel-list-item');
    let active = 0;
    let timer;

    function trocarCarroussel(direction) {
        let itemAtual = carroussel.querySelector('.carroussel-list .carroussel-list-item.active');
        itemAtual.classList.remove('active', 'anim-next', 'anim-prev');

        if (direction < 0) {
            active = (active - 1 + carrousselItems.length) % carrousselItems.length;
            carrousselItems[active].classList.add('anim-prev', 'active');
        } else {
            active = (active + 1) % carrousselItems.length;
            carrousselItems[active].classList.add('anim-next', 'active');
        }
    }

    function resetarIntervalo() {
        clearInterval(timer);
        timer = setInterval(() => trocarCarroussel(1), 7000);
    }

    resetarIntervalo();

    prevBtn.onclick = () => {
        trocarCarroussel(-1);
        resetarIntervalo();
    };

    nextBtn.onclick = () => {
        trocarCarroussel(1);
        resetarIntervalo();
    };
}
