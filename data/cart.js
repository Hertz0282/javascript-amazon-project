// we will use module to prevent naming error in different scripts.This also helps in running only 1 script at every time.(So no running 1 or more scripts simultaneosly ) 

export let cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
}, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
}];

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
};

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
}