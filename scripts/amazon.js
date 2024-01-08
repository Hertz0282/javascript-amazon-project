// here we are using an array to show the products and as a product has different paramaters to it we shall be using object inside the array to represent these products. Below is how we represent html in javascript
import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

let productsHTML = "";

products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
        <div class="product-image-container">
        <img
            class="product-image"
            src="${product.image}"
        />
        </div>

        <div class="product-name limit-text-to-2-lines">
        ${product.name}
        </div>

        <div class="product-rating-container">
        <img
            class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png"
        />
        <div class="product-rating-count link-primary">${product.rating.count}</div>
        </div>

        <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div> <!-- here to fixed is used to generate 2 decimal places. -->

        <div class="product-quantity-container">
        <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-name = "${product.name}"
        data-product-id = "${product.id}">
        Add to Cart
        </button>
        <!-- data attribute helps to give an unique name to an element.
        This piece of code has to start with data-< any name >.
        The purpose of this data attribute is to give an additional information it can be name, price and age. -->
    </div>`;

});


// we should not be using productname to differentiate a product so you need to have some sort of unique id for each of the products.

document.querySelector('.js-product-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.dataset.productId); // this syntax gives all the data attributes present in that piece of code.
        const productId = button.dataset.productId;
        const productName = button.dataset.productName;

        let matchingItem;

        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
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

        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;                
        })

        document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
    });
});


