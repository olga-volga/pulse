function reviews(reviewSelector) {
    const review = document.querySelectorAll(reviewSelector);

    window.addEventListener('scroll', () => {
        review.forEach(item => {
            if (Math.round(item.getBoundingClientRect().top) <= 650) {
                item.classList.add('animate__animated', 'animate__fadeInUp');
                // for IE
                item.style.opacity = '1';
            } else if (Math.round(item.getBoundingClientRect().top) > 650) {
                item.classList.remove('animate__fadeInUp');
                // for IE
                item.style.opacity = '';
            }
        });
    });
}

export default reviews;