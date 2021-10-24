function modals() {
    let triggerClicked = false;

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
    }
    function closeModal(elem) {
        elem.style.display = 'none';
        document.body.style.marginRight = '0px';
        document.body.style.overflow = '';
    }
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelectorAll(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', () => {
                triggerClicked = true;
                openModal(modal);
            });
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
        close.forEach(item => {
            item.addEventListener('click', () => {
                closeModal(modal);
            });
        });
    }
    function showModalByScroll(elemSelector) {
        window.addEventListener('scroll', () => {
            if (!triggerClicked && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                document.querySelector(elemSelector).click();
            }
        });
    }

    bindModal('.button-consultation', '#consultation', '.modal__close');
    bindModal('.button_buy', '#order', '.modal__close');

    showModalByScroll('.button-consultation');
}

export default modals;