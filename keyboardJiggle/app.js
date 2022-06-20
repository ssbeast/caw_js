// importing nextKey, jiggleKey, jiggleNext from utils.js
import {nextKey, jiggleKey, jiggleNext} from "./utils.js";

// creating keys array containing all keys
const keysArray = document.querySelectorAll('.key');

// if user presses same key, then next random key starts jiggling
document.addEventListener('keydown', (e) => {

    // condition to check if tab key is pressed and its default behaviour is prevented
    if (e.keyCode == 0 || e.keyCode == 9) {
        
        e.preventDefault();
        e.stopPropagation();
    }

    if (e.key.toUpperCase() == jiggleKey) {

        keysArray[nextKey].classList.remove("jiggle");
        jiggleNext();
    }
}, true);

// calling jiggleNext function to jiggle first random key
jiggleNext();

// exporting keysArray to use in utils.js
export {

    keysArray
}

