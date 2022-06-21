// importing from utils.js
import { isValidTime, startTimer, stopTimer } from "./utils.js";

export const ringColor = document.querySelector('.ring');
export const startButton = document.querySelector('.start');
export const settingsButton = document.querySelector('.settings');
export const minutes = document.querySelector('#minutes__input');
export const seconds = document.querySelector('#seconds__input');

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