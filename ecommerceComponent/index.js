// importing files
import { addFoodToCart } from './utils/utils.js';
import { cartAddArray } from './utils/container.js';

// Iterating over cartAddArray and adding it to card when user clicks on add
cartAddArray.forEach((data, pos) => {
  data.addEventListener('click', () => {
    addFoodToCart(data, pos);
  });
});
