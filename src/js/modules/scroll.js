function scroll(pageupBtnSelector) {
    const pageupBtn = document.querySelector(pageupBtnSelector);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 700) {
            pageupBtn.style.opacity = '1';
        } else {
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

					docElement.scrollTo(0, pxToScroll);

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