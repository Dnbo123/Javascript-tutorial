const DEFAULT_DELIVERY_OPTION_ID = '1';


export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId:DEFAULT_DELIVERY_OPTION_ID
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
         deliveryOptionId: DEFAULT_DELIVERY_OPTION_ID
    }];
    
}

//Ensure all existing cart items have a deliveryOptionId
cart = cart.map(item => ({
    ...item,
    deliveryOptionId: item.deliveryOptionId || DEFAULT_DELIVERY_OPTION_ID
}));


function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    /*Addding product to cart */
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    /* If the item is already in the cart, increment its quantity */
    if(matchingItem) {
        matchingItem.quantity += 1;
    }else {
        /* If the item is not in the cart, add it */
        cart.push({
            productId : productId,
            quantity: 1,
             deliveryOptionId: DEFAULT_DELIVERY_OPTION_ID
           });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
        newCart.push(cartItem);
    }
  });

    cart = newCart;

    saveToStorage();
}

export function updatedDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}

export function updatedQuantity(productId, newQuantity) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;

    saveToStorage();
}