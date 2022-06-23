// array of all menu items
const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

// importing addFoodCart from utils.js
import { addFoodToCart } from "./utils.js";

const foodPrice = document.querySelector(".amount.price.subtotal");
const taxPrice = document.querySelector(".amount.price.tax");
const totalPrice = document.querySelector(".amount.price.total");
const cartAddArray = document.querySelectorAll(".add");
const cartSummary = document.querySelector(".cart-summary");
const cartEmpty = document.querySelector(".empty");

// Iterating over cartAddArray and adding it to card when user clicks on add
cartAddArray.forEach((data, pos) => {

    data.addEventListener('click', () => {

        addFoodToCart(data, pos);
    })
})

// exporting to use in utils.js
export {

    foodPrice,
    taxPrice,
    totalPrice,
    cartEmpty,
    cartSummary,
    menuItems
}