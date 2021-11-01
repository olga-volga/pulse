function slider() {
    const slidesWrapper = document.querySelector('.slider__body'),
          slidesWrapperInner = document.querySelector('.slider__inner'),
          slideItem = document.querySelectorAll('.slider__item'),
          prevBtn = document.querySelector('.arrow_prev'),
          nextBtn = document.querySelector('.arrow_next'),
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