// creating keys array containing all keys
const keysArray = document.querySelectorAll('.key');

// declaring variables
let nextKey, jiggleKey;

// function to jiggle a random next key
const jiggleNext = () => {

    nextKey = Math.floor((Math.random() * keysArray.length) - 1);
    keysArray[nextKey].classList.add('jiggle');
    jiggleKey = keysArray[nextKey].getAttribute('data-key');
}

// if user presses same key, then next random key starts jiggling
document.addEventListener('keydown', (e) => {

    if (e.key.toUpperCase() == jiggleKey) {

        keysArray[nextKey].classList.remove("jiggle");
        jiggleNext();
    }
}, true);

// calling jiggleNext function to jiggle first random key
jiggleNext();

