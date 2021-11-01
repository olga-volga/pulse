function showDetails(linkSelector, linkBackSelector, itemContentSelector, itemDetailsSelector) {
    const link = document.querySelectorAll(linkSelector),
          linkBack = document.querySelectorAll(linkBackSelector),
          itemContent = document.querySelectorAll(itemContentSelector),
          itemDetails = document.querySelectorAll(itemDetailsSelector),
          contentActiveClass = `${itemContentSelector.replace(/./, '')}_active`,
          detailsActiveClass = `${itemDetailsSelector.replace(/./, '')}_active`;

    link.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            if (e.target == item) {
                itemContent[i].classList.remove(contentActiveClass);
                itemDetails[i].classList.add(detailsActiveClass);
            }
        });
    });

    linkBack.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            if (e.target == item) {
                itemDetails[i].classList.remove(detailsActiveClass);
                itemContent[i].classList.add(contentActiveClass);
            }
        });
    });
}

export default showDetails;