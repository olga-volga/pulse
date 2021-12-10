function reviews(reviewSelector) {
    const review = document.querySelectorAll(reviewSelector);

    window.addEventListener('scroll', () => {
        review.forEach(item => {
            if (Math.round(item.getBoundingClientRect().top) <= 650) {
                item.classList.add('animate__animated', 'animate__fadeInUp');
            } else if (Math.round(item.getBoundingClientRect().top) > 650) {
                item.classList.remove('animate__fadeInUp');
            }
        });
    });
}

export default reviews;