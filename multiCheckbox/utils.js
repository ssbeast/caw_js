// importimg checkBoxArray from app.js
import { checkBoxArray } from './app.js';

// declaring variables
let checkFirst = null;

// function to check all boxes between two selected boxes
const checkBoxBetween = (e) => {
  // if there is already first check selected then select boxes inbetween else mark it as first checked
  if (e.shiftKey && checkFirst) {
    let beginPos = parseInt(checkFirst.slice(8));
    let lastPos = parseInt(e.target.id.slice(8));

    // swap begin and last positions if first selected box is below last one
    if (beginPos > lastPos) {
      [beginPos, lastPos] = [lastPos, beginPos];
    }

    let isChecked = e.target.checked;

    // Iterating over array and selecting all boxes inbetween
    for (let pos = beginPos; pos < lastPos; pos++) {
      checkBoxArray[pos].checked = isChecked;
    }
  } else {
    checkFirst = e.target.id;
  }
};

// exporting checkBoxBetween
export { checkBoxBetween };
