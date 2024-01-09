// we will use module to prevent naming error in different scripts.This also helps in running only 1 script at every time.(So no running 1 or more scripts simultaneosly ) 

export const cart = [];

export function addToCart(productId, productName) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity ++;
    } else {
        cart.push({
            productId: productId,
            productName: productName,
            quantity: 1,
        }); 
    }
}