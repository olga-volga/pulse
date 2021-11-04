import {calcScrollWidth} from './modals';
import {openModal} from './modals';
import {closeModal} from './modals';

function form() {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          messageWindow = document.querySelector('#thanks'),
          windows = document.querySelectorAll('.modal');

    const message = {
        successTitle: "Спасибо за вашу заявку!",
        successDescr: "Наш менеджер свяжется с вами в ближайшее время!",
        failTitle: "Произошла ошибка...",
        failDescr: "Попробуйте еще раз позднее"
    };
    const postData = async (url, data) => {
        let result = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await result.text();
    };
    const clearInput = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };
    const showStatusMessage = (title, descr, element) => {
        const messageTitle = messageWindow.querySelector('.modal__subtitle'),
              messageDescr = messageWindow.querySelector('.modal__descr');

        windows.forEach(item => {
            closeModal(item);
        });
        messageTitle.textContent = title;
        messageDescr.textContent = descr;

        openModal(element);
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(item);

            postData('php/server.php', formData)
                .then(res => {
                    console.log(res);
                    showStatusMessage(message.successTitle, message.successDescr, messageWindow);
                })
                .catch(() => {
                    showStatusMessage(message.failTitle, message.failDescr, messageWindow);
                })
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        windows.forEach(item => {
                            closeModal(item);
                        });
                    }, 5000);
                })
        });
    });
}

export default form;