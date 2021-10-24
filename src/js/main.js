import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    tabs('.catalog__tabs', '.catalog__tab', '.catalog__content', 'catalog__tab_active');
});