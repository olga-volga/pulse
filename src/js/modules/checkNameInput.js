function checkNameInput(inputSelector) {
    const nameInput = document.querySelectorAll(inputSelector);

    nameInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-яё \s]/ig, '');
        });
    });
}

export default checkNameInput;