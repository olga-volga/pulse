function order(orderData) {
    const products = document.querySelectorAll('.catalog-item__subtitle'),
          prices = document.querySelectorAll('.catalog-item__new-price'),
          triggers = document.querySelectorAll('.button_buy'),
          modalOrder = document.querySelector('#order'),
          modalDescr = modalOrder.querySelector('.modal__descr');
    
    function addToOrder(i) {
        modalDescr.textContent = products[i].innerHTML;
        orderData.product = products[i].innerHTML.slice(11);
        orderData.price = prices[i].innerHTML.replace(/\D/ig, '');
        console.log(orderData);
    }

    triggers.forEach((item, i) => {
        item.addEventListener('click', () => {
            addToOrder(i);
        });
    });
}

export default order;