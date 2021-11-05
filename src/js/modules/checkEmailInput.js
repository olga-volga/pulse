function checkEmailInput(inputSelector) {
    const emailInput = document.querySelectorAll(inputSelector);

    emailInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^a-z 0-9 @ .]/ig, '');
        });
    });
}

export default checkEmailInput;