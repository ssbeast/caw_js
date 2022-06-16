const ringColor = document.querySelector('.ring');
const minutes = document.querySelector('#minutes__input');
const seconds = document.querySelector('#seconds__input');
const startButton = document.querySelector('.start');
const settingsButton = document.querySelector('.settings');

var timer;
var isStartValid = true;

const checkValidTime = (minutes, seconds) => {

    if (!(minutes >= 0 && minutes < 60) || !(seconds >= 0 && seconds < 60) || minutes.trim() == "" || seconds.trim() == "") {

        return false;
    } else {

        return true;
    }
}

startButton.addEventListener('click', () => {

    minutes.disabled = true;
    seconds.disabled = true;

    if (checkValidTime(minutes.value, seconds.value)) {

        startTimer();
    } else {

        alert("Dear user, Please enter valid time ; )");
        minutes.value = "00";
        seconds.value = "15";
    }
})

settingsButton.addEventListener('click', () => {

    minutes.disabled = false;
    seconds.disabled = false;
    stopTimer();
})

const startTimer = () => {

    if (isStartValid == true) {

        startButton.innerHTML = "Stop";
        isStartValid = false;

        timer = setInterval(() => {

            if (minutes.value == 0 && seconds.value == 0) {

                stopTimer();
                ringColor.style.stroke = "#900A0A";

                setTimeout(() => {

                    alert("GAME OVER! Time's UP ; )");
                    ringColor.style.stroke = "#09A65A";
                }, 100)
            } else {

                if (seconds.value == 0) {
                    
                    minutes.value -= 1;
                    minutes.value = ('0' + minutes.value).slice(-2);
                    seconds.value = 59;
                } else {

                    seconds.value -= 1;
                    seconds.value = ('0' + seconds.value).slice(-2);
                }
            } 
        }, 1000);
    } else {

        isStartValid = true;
        stopTimer();
    }
}

const stopTimer = () => {

    startButton.innerHTML = "Start";
    clearInterval(timer);
}