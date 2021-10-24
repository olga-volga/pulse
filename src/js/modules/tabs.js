function tabs() {
    const tabHeadersParent = document.querySelector('.catalog__tabs'),
          tabHeaders = document.querySelectorAll('.catalog__tab'),
          tabContents = document.querySelectorAll('.catalog__content');

    function hideTabContent() {
        tabContents.forEach(item => {
            item.style.display = 'none';
        });
        tabHeaders.forEach(item => {
            item.classList.remove('catalog__tab_active');
        });
    }
    function showTabContent(i = 0) {
        hideTabContent();
        tabContents[i].style.display = 'flex';
        tabHeaders[i].classList.add('catalog__tab_active');
    }

    showTabContent();

    tabHeadersParent.addEventListener('click', (e) => {
        if (e.target && e.target.closest('.catalog__tab')) {
            tabHeaders.forEach((item, i) => {
                if (e.target.closest('.catalog__tab') == item) {
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;