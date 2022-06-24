// importing checkBoxBetween from utils.js
import { checkBoxBetween } from './utils.js';

// creating array of all the episode checkBoxArray
const checkBoxArray = document.querySelectorAll("input[type='checkbox']");

// Iterating over checkBoxArray and checking when boxes get selected
checkBoxArray.forEach((data) => {
  data.addEventListener('click', checkBoxBetween);
});

// exporting checkBoxArray
export { checkBoxArray };
