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

const foodPrice = document.querySelector(".amount.price.subtotal");
const taxPrice = document.querySelector(".amount.price.tax");
const totalPrice = document.querySelector(".amount.price.total");
const cartAddArray = document.querySelectorAll(".add");
const cartSummary = document.querySelector(".cart-summary");
const cartEmpty = document.querySelector(".empty");

// declaring variables
let foodBillPrice = 0;
let taxBillPrice = 0;
let totalBillPrice = 0;

// function for updating food total price in the cart
const updateFoodPrice = () => {

    foodBillPrice = 0;

    // Iterating over cart and finding total food price with total counts
    for (let itemPos = 0; itemPos < menuItems.length; itemPos++) {

        foodBillPrice += menuItems[itemPos].count * menuItems[itemPos].price;
    }

    // finding total bill by adding food price and tax price
    taxBillPrice = foodBillPrice * 0.0975;
    taxBillPrice = Math.round(taxBillPrice) / 100;
    foodBillPrice = foodBillPrice / 100;
    totalBillPrice = foodBillPrice + taxBillPrice;
    totalBillPrice = Math.round(totalBillPrice * 100) / 100;

    // updating price values in the card
    taxPrice.innerText = '$' + taxBillPrice;
    foodPrice.innerText = '$' + foodBillPrice;
    totalPrice.innerText = '$' + totalBillPrice;

    // if food price is zero then "cart is empty" is shown, else food cards will be shown
    if (foodBillPrice) {
        
        cartEmpty.style.display = 'none';
    } else {

        cartEmpty.style.display = 'block'
    }
};

// function to update the count of food items
const updateFoodCount = (item, count, foodPrice) => {

    count.innerHTML = item.count;
    foodPrice.innerHTML = '$' + (item.count * item.price) / 100;

    // updating food price when food count changes
    updateFoodPrice();
}

// function for creating food item card ui in the cart
const addCardUI = (cardButton, pos) => {

    // declaring varibales for creating elements
    let li = document.createElement("li");
    let foodImage = document.createElement("img");
    let decImage = document.createElement("img");
    let incImage = document.createElement("img");
    let foodCard = document.createElement("div");
    let foodCount = document.createElement("div");
    let contentCard = document.createElement("div");
    let foodName = document.createElement("p");
    let foodPrice = document.createElement("p");
    let cartButton = document.createElement("div");
    let decButton = document.createElement("button");
    let incButton = document.createElement("button");
    let totalPriceDiv = document.createElement("div");

    // creating card UI
    li.setAttribute("id", pos);
    foodCard.setAttribute("class", "plate");
    foodImage.setAttribute("src", `images/${menuItems[pos].image}`);
    foodImage.setAttribute("alt", menuItems[pos].alt);
    foodImage.setAttribute("class", "plate");
    foodCard.append(foodImage);
    foodCount.setAttribute("class", "quantity");
    menuItems[pos].count += 1;
    foodCount.innerHTML = menuItems[pos].count;
    foodCard.append(foodCount);
    li.append(foodCard);
    contentCard.setAttribute("class", "content");
    foodName.setAttribute("class", "menu-item");
    foodName.innerHTML = menuItems[pos].name;
    contentCard.append(foodName);
    foodPrice.setAttribute("class", "price");
    foodPrice.innerHTML = "$" + menuItems[pos].price / 100;
    contentCard.append(foodPrice);
    li.append(contentCard);
    cartButton.setAttribute("class", "quantity__wrapper");
    decButton.setAttribute("class"," decrease");
    decImage.setAttribute("src", "images/chevron.svg");
    decButton.append(decImage);
    cartButton.append(decButton);
    cartButton.append(foodCount);
    incButton.setAttribute("class", "increase");
    incImage.setAttribute("src", "images/chevron.svg");
    incButton.append(incImage);
    cartButton.append(incButton);
    li.append(cartButton);
    totalPriceDiv.setAttribute("class", "subtotal");
    totalPriceDiv.innerHTML = "$" + (foodCount.innerHTML * menuItems[pos].price) / 100;
    li.append(totalPriceDiv);

    decButton.addEventListener("click", () => {

        // when dec button is pressed, if count is 1 then card is removed else count decreases by 1
        if (menuItems[pos].count == 1) {

            cartSummary.removeChild(li);
            cardButton.classList.remove("in-cart")
            cardButton.classList.add("add");
            cardButton.disabled = false;
            cardButton.innerText = "Add to cart";
        } else {

            menuItems[pos].count -= 1;
            updateFoodCount(menuItems[pos], foodCount, totalPriceDiv);
        }
    })

    // when inc button is pressed, count increses by 1
    incButton.addEventListener("click", () => {

        menuItems[pos].count += 1;
        updateFoodCount(menuItems[pos], foodCount, totalPriceDiv);
    })

    // adding card UI in cart and updating the total price
    cartSummary.append(li);
    updateFoodPrice();
}

// function for adding food item in the cart
const addFoodToCart = (cardButton, pos) => {

    // calling addCardUI function to display the food card in cart
    addCardUI(cardButton, pos);

    cardButton.classList.remove("add");
    cardButton.classList.add("in-cart");
    cardButton.innerHTML = "";

    // adding check image in the card
    const checkImage = document.createElement("img");
    checkImage.setAttribute("src", "images/check.svg");
    cardButton.append(checkImage);
    cardButton.append("In Cart");
    cardButton.disabled = true;
}

// Iterating over cartAddArray and adding it to card when user clicks on add
cartAddArray.forEach((data, pos) => {

    data.addEventListener('click', () => {

        addFoodToCart(data, pos);
    })
})