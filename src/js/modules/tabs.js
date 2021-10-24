function tabs(tabParentSelector, tabHeaderSelector, tabContentSelector, activeClass) {
    const tabHeadersParent = document.querySelector(tabParentSelector),
          tabHeaders = document.querySelectorAll(tabHeaderSelector),
          tabContents = document.querySelectorAll(tabContentSelector);

    function hideTabContent() {
        tabContents.forEach(item => {
            item.style.display = 'none';
        });
        tabHeaders.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    function showTabContent(i = 0) {
        hideTabContent();
        tabContents[i].style.display = 'flex';
        tabHeaders[i].classList.add(activeClass);
    }

    showTabContent();

    tabHeadersParent.addEventListener('click', (e) => {
        if (e.target && (e.target.closest(tabHeaderSelector) || e.target.classList.contains(tabHeaderSelector.replace(/./, '')))) {
            tabHeaders.forEach((item, i) => {
                if (e.target == item || e.target.closest(tabHeaderSelector) == item) {
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;