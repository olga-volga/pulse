function phoneMask(inputSelector) {
    const phoneInput = document.querySelectorAll(inputSelector);

    function setCursorPosition(position, elem) {
		elem.focus();

		elem.addEventListener('click', () => {
			elem.selectionStart = elem.selectionEnd = elem.value.length;
		});

		if (elem.setSelectionRange) {
			elem.setSelectionRange(position, position);
		} else if (elem.createTextRange) {
			let range = elem.createTextRange();
			range.collapse(true);
			range.moveEnd('char', position);
			range.moveStart('char', position);
			range.select();
		}
	}

	function createMask(event) {
		let matrix = '+7(___) ___ __ __',
			i = 0,
			def = matrix.replace(/\D/ig, ''),
			val = this.value.replace(/\D/ig, '');

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
		});

		if (event.type === 'blur') {
			if (this.value.length == 2) {
				this.value = '';
			}
		} else {
			setCursorPosition(this.value.length, this);
		}
	}

	phoneInput.forEach(item => {
		item.addEventListener('input', createMask);
		item.addEventListener('focus', createMask);
		item.addEventListener('blur', createMask);
	});
}

export default phoneMask;