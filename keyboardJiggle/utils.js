// importing keyArray from app.js
import { keysArray } from "./app.js";

// declaring variables
let nextKey;
let jiggleKey;

// function to jiggle a random next key
const jiggleNext = () => {

    nextKey = Math.floor((Math.random() * keysArray.length) - 1);
    keysArray[nextKey].classList.add('jiggle');
    jiggleKey = keysArray[nextKey].getAttribute('data-key');
}

// exporting nextKey, jiggleKey, jiggleNext to use in app.js
export {

    nextKey,
    jiggleKey,
    jiggleNext
}