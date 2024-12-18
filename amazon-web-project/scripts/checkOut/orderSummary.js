import {cart, removeFromCart, updatedDeliveryOption} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
import {formatCurrency} from '../utilities/money.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions, getDeliveryOption,  calculateDeliveryDate} from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';
import { renderCheckOutHeader } from './checkOutHeader.js';


export function renderOrderSummary() {

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId)

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const dateString = calculateDeliveryDate(deliveryOption);

   cartSummaryHTML += `
       <div class="cart-item-container 
 js-cart-item-container
        js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
              $${matchingProduct.productPrice()}
                </div>
                <div class="product-quantity 
                js-product-quantity-${matchingProduct.id}">
                  <span>
                    Quantity: <span class="quantity-label">
                    ${cartItem.quantity}
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                        </span>
                  <span class="delete-quantity-link
                  link-primary  js-delete-link
                  js-delete-link-${matchingProduct.id}"
                   data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options js-delivery-option">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                
                ${deliveryOptionHTML(matchingProduct, cartItem)}
              </div>
            </div>
          </div>
    `;

});

function deliveryOptionHTML(matchingProduct, cartItem) {
  let html = '';

  deliveryOptions.forEach((deliveryOption) => {
   const dateString = calculateDeliveryDate(deliveryOption);

    const priceString = deliveryOption.priceCents === 0
    ? 'FREE'
    : `$${formatCurrency(deliveryOption.priceCents)} -`;

const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

    html += `
        <div class="delivery-option js-delivery-option"
        data-product-id="${matchingProduct.id}"
        data-delivery-option-id="${deliveryOption.id}">
                      <input type="radio"
                      ${isChecked ? 'Checked' : ''}
                        class="delivery-option-input"
                        name="delivery-option-${matchingProduct.id}">
                      <div>
                        <div class="delivery-option-date">
                          ${dateString}
                        </div>
                        <div class="delivery-option-price">
                         ${priceString} Shipping
                        </div>
                      </div>
                    </div>
        `
  });

  return html;
}

document.querySelector('.js-order-summary')
.innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
.forEach((link) => {
  link.addEventListener('click', () => {
     const productId = link.dataset.productId;
        removeFromCart(productId);
      
        const container = document.querySelector(
          `.js-cart-item-container-${productId}`);
          container.remove();

          renderPaymentSummary();
          renderCheckOutHeader();
  });
});

document.querySelectorAll('.js-delivery-option')
  .forEach((element) =>{
        element.addEventListener('click', () => {
          const {productId, deliveryOptionId} = element.dataset;
          updatedDeliveryOption(productId, deliveryOptionId);
          renderOrderSummary();
          renderPaymentSummary();
        });
  });

}

