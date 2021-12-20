import 'element-closest-polyfill';

import modals from './modules/modals';
import tabs from './modules/tabs';
import showDetails from './modules/showDetails';
import slider from './modules/slider';
import form from './modules/form';
import order from './modules/order';
import checkNameInput from './modules/checkNameInput';
import checkEmailInput from './modules/checkEmailInput';
import scroll from './modules/scroll';
import phoneMask from './modules/phoneMask';
import reviews from './modules/reviews';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let orderInfo = {};

    modals();
    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
    showDetails('.catalog-item__link', '.catalog-item__back', '.catalog-item__content', '.catalog-item__details');
    slider('.slider__wrapper', '.slider__body', '.slider__inner', '.slider__item', '.arrow_prev', '.arrow_next');
    form(orderInfo);
    order(orderInfo);
    checkNameInput('[name="name"]');
    checkEmailInput('[name="email"]');
    scroll('.pageup');
    phoneMask('[name="phone"]');
    reviews('.reviews-item');
});