function slider(wrapperSelector, wrapperInnerSelector, slideSelector, prevBtnSelector, nextBtnSelector) {
    const slidesWrapper = document.querySelector(wrapperSelector),
          slidesWrapperInner = document.querySelector(wrapperInnerSelector),
          slideItem = document.querySelectorAll(slideSelector),
          prevBtn = document.querySelector(prevBtnSelector),
          nextBtn = document.querySelector(nextBtnSelector),
          sliderWidth = slidesWrapper.offsetWidth;

    let offset = 0;

    slidesWrapperInner.style.width = `${100 * slideItem.length}%`;
    slidesWrapperInner.style.display = 'flex';
    slidesWrapperInner.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slideItem.forEach(item => {
        item.style.width = `${sliderWidth}px`;
    });

    function moveSlide(value) {
        slidesWrapperInner.style.transform = `translateX(-${value}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (offset == sliderWidth * (slideItem.length - 1)) {
            offset = 0;
        } else {
            offset += sliderWidth;
        }
        moveSlide(offset);
    });
    prevBtn.addEventListener('click', () => {
        if (offset == 0) {
            offset = sliderWidth * (slideItem.length - 1);
        } else {
            offset -= sliderWidth;
        }
        moveSlide(offset);
    });
}

export default slider;