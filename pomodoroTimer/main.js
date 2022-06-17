const ringColor = document.querySelector('.ring');
const startButton = document.querySelector('.start');
const settingsButton = document.querySelector('.settings');
const minutes = document.querySelector('#minutes__input');
const seconds = document.querySelector('#seconds__input');

// declaring letiables
let timer;
let isStartValid = true;

// function to check if time input by user is valid or not
const isValidTime = (minutes, seconds) => {

    if (!(minutes >= 0 && minutes < 60) || !(seconds >= 0 && seconds < 60) || minutes.trim() == "" || seconds.trim() == "") {

        return false;
    } else {

        return true;
    }
}

// start timer if input by uswer is valid, else give an alert message
startButton.addEventListener('click', () => {

    minutes.disabled = true;
    seconds.disabled = true;

    if (isValidTime(minutes.value, seconds.value)) {

        startTimer();
    } else {

        // alert message when input is not valid, and time resets to default
        alert("Dear user, Please enter valid time ; )");
        minutes.value = "00";
        seconds.value = "15";
    }
})

// input time by user by clicking gear setting icon
settingsButton.addEventListener('click', () => {

    minutes.disabled = false;
    seconds.disabled = false;
    stopTimer();
})

// function to start the timer, when user clicks starts
const startTimer = () => {

    if (isStartValid == true) {

        startButton.innerHTML = "Stop";
        isStartValid = false;

        timer = setInterval(() => {

            // condition to check when timer ends
            if (minutes.value == 0 && seconds.value == 0) {

                stopTimer();
                ringColor.style.stroke = "#900A0A";

                setTimeout(() => {

                    // alert messgage when timer ends, and ring turns to red color
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

// function to stop the timer, and toggle stop button to start button
const stopTimer = () => {

    startButton.innerHTML = "Start";
    clearInterval(timer);
}