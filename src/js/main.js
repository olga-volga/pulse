import modals from './modules/modals';
import tabs from './modules/tabs';
import showDetails from './modules/showDetails';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
    showDetails('.catalog-item__link', '.catalog-item__back', '.catalog-item__content', '.catalog-item__details');
    slider('.slider__wrapper', '.slider__body', '.slider__inner', '.slider__item', '.arrow_prev', '.arrow_next');
});