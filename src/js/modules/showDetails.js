function showDetails() {
    const link = document.querySelectorAll('.catalog-item__link'),
          linkBack = document.querySelectorAll('.catalog-item__back'),
          itemContent = document.querySelectorAll('.catalog-item__content'),
          itemDetails = document.querySelectorAll('.catalog-item__details');

    link.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            if (e.target == item) {
                itemContent[i].classList.remove('catalog-item__content_active');
                itemDetails[i].classList.add('catalog-item__details_active');
            }
        });
    });

    linkBack.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            if (e.target == item) {
                itemDetails[i].classList.remove('catalog-item__details_active');
                itemContent[i].classList.add('catalog-item__content_active');
            }
        });
    });
}

export default showDetails;