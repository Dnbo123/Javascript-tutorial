import {cart} from '../../data/cart.js';

export function renderCheckOutHeader() {

   const checkOutHeaderHTML = `
    <div class="checkout-header-middle-section">
          Checkout (<a class="return-to-home-link"
            href="amazon.html">${cart.length}</a>)
        </div>
    `

    document.querySelector('.js-checkout-section')
    .innerHTML = checkOutHeaderHTML;
}