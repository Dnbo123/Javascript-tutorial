export const cart = [];

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
            quantity: 1
           });
    }
}