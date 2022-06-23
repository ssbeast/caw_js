const foodPrice = document.querySelector(".amount.price.subtotal");
const taxPrice = document.querySelector(".amount.price.tax");
const totalPrice = document.querySelector(".amount.price.total");
const cartSummary = document.querySelector(".cart-summary");
const cartEmpty = document.querySelector(".empty");
const cartAddArray = document.querySelectorAll(".add");

// exporting foodPrice, taxPrice, totalPrice, cartEmpty, cartSummary
export {

    foodPrice,
    taxPrice,
    totalPrice,
    cartEmpty,
    cartSummary,
    cartAddArray
}