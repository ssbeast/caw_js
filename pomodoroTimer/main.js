const minutes = document.querySelector('#minutes__input');
const seconds = document.querySelector('#seconds__input');
const startButton = document.querySelector('.start');
const settingsButton = document.querySelector('.settings');

var timer;
var startFlag = true;

const checkValidTime = (minutes, seconds) => {

    if (!(minutes >= 0 && minutes < 60) || !(seconds >= 0 && seconds < 60) || minutes == "" || seconds == "") {

        return false;
    } else {

        return true;
    }
}

startButton.addEventListener('click', () => {

    if (checkValidTime(minutes.value, seconds.value)) {

        startTimer();
    } else {

        alert("Dear user, Please enter valid time ; )");
    }
})

settingsButton.addEventListener('click', () => {

    minutes.disabled = false;
    seconds.disabled = false;
    stopTimer();
})

const startTimer = () => {

    if (startFlag == true) {

        startButton.innerHTML = "Stop";
        startFlag = false;

        timer = setInterval(() => {
        
        if (seconds.value == 0) {

            minutes.value -= 1;
            seconds.value = 59;
        } else {

            seconds.value -= 1;
        }
    }, 1000);
    } else {

        startFlag = true;
        stopTimer();
    }
}

const stopTimer = () => {

    startButton.innerHTML = "Start";
    clearInterval(timer);
}

