const minutes = document.querySelector('#minutes__input');
const seconds = document.querySelector('#seconds__input');
const startButton = document.querySelector('.start');
const settingsButton = document.querySelector('.settings');

var timer;

startButton.addEventListener('click', () => {

    startButton.innerHTML = "Stop";

    timer = setInterval(() => {
        
        if (seconds.value == 0) {

            minutes.value -= 1;
            seconds.value = 60;
        } else {

            seconds.value -= 1;
        }
    }, 1000);
})

settingsButton.addEventListener('click', () => {

    minutes.disabled = false;
    seconds.disabled = false;
    stopTimer();
})

const stopTimer = () => {

    startButton.innerHTML = "Start";
    clearInterval(timer);
}

