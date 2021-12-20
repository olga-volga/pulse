function scroll(pageupBtnSelector) {
    const pageupBtn = document.querySelector(pageupBtnSelector);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 700 || docElement.scrollTop > 700) {
			pageupBtn.classList.add('animate__animated', 'animate__fadeIn');
			pageupBtn.classList.remove('animate__fadeOut');
			// for IE
			pageupBtn.style.opacity = '1';
        } else {
			pageupBtn.classList.add('animate__fadeOut');
			pageupBtn.classList.remove('animate__fadeIn');
			// for IE
			pageupBtn.style.opacity = '';
        }
    });

    // Soft scroll

    const docElement = document.documentElement,
          localLinks = document.querySelectorAll('[href^="#"]'),
		  speedScroll = 0.25;

	localLinks.forEach(item => {
		if (item.getAttribute("href") != '#') {
			item.addEventListener('click', function(e) {
				e.preventDefault();

				let scrollTop = docElement.scrollTop,
					hash = this.hash,
					elemToScroll = document.querySelector(hash).getBoundingClientRect().top,
					start = null;

				requestAnimationFrame(step);

				function step(time) {
					if (start === null) {
						start = time;
					}
					let progress = time - start,
						pxToScroll = (elemToScroll < 0 ? Math.max(scrollTop - progress / speedScroll, scrollTop + elemToScroll) : Math.min(scrollTop + progress / speedScroll, scrollTop + elemToScroll));

					window.scrollTo(0, pxToScroll);

					if (pxToScroll != scrollTop + elemToScroll) {
						requestAnimationFrame(step);
					} else {
						location.hash = hash;
					}
				}
			});
		}
	});
}

export default scroll;