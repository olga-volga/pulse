function calcScrollWidth() {
    let div = document.createElement('div');
    div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibility:hidden;';
    document.body.append(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}
function openModal(elem) {
    elem.style.display = 'block';
    document.body.style.marginRight = `${calcScrollWidth()}px`;
    document.body.style.overflow = 'hidden';
    try {
        document.querySelector('.pageup').style.marginRight = `${calcScrollWidth()}px`;
    } catch(err) {}
}
function closeModal(elem) {
    elem.style.display = 'none';
    document.body.style.marginRight = '0px';
    document.body.style.overflow = '';
    try {
        document.querySelector('.pageup').style.marginRight = '';
    } catch(err) {}
}
function modals() {
    let triggerClicked = false;

    function bindModal(triggerSelector, modalSelector, closeClassSelector) {
        const modal = document.querySelector(modalSelector);

        let trigger;

        try {
            trigger = document.querySelectorAll(triggerSelector);
            trigger.forEach(item => {
                item.addEventListener('click', () => {
                    triggerClicked = true;
                    openModal(modal);
                });
            });
        } catch (err) {}
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains(closeClassSelector)) {
                closeModal(modal);
            }
        });
    }
    function showModalByScroll(elemSelector) {
        window.addEventListener('scroll', () => {
            if (!triggerClicked && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                document.querySelector(elemSelector).click();
            }
        });
    }

    bindModal('.button-consultation', '#consultation', 'modal__close');
    bindModal('.button_buy', '#order', 'modal__close');
    bindModal('', '#thanks', 'modal__close');

    showModalByScroll('.button-consultation');
}

export default modals;
export {calcScrollWidth};
export {openModal};
export {closeModal};