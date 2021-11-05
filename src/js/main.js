import modals from './modules/modals';
import tabs from './modules/tabs';
import showDetails from './modules/showDetails';
import slider from './modules/slider';
import form from './modules/form';
import order from './modules/order';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let orderInfo = {};

    modals();
    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
    showDetails('.catalog-item__link', '.catalog-item__back', '.catalog-item__content', '.catalog-item__details');
    slider('.slider__wrapper', '.slider__body', '.slider__inner', '.slider__item', '.arrow_prev', '.arrow_next');
    form(orderInfo);
    order(orderInfo);
});