// importing from main.js
import { ringColor, startButton, minutes, seconds } from './main.js';

// declaring letiables
let timer;
let isStartValid = true;

// function to check if time input by user is valid or not
const isValidTime = (minutes, seconds) => {
  if (
    !(minutes >= 0 && minutes < 60) ||
    !(seconds >= 0 && seconds < 60) ||
    minutes.trim() == '' ||
    seconds.trim() == ''
  ) {
    return false;
  } else {
    return true;
  }
};

// function to start the timer, when user clicks starts
const startTimer = () => {
  if (isStartValid == true) {
    startButton.innerHTML = 'Stop';
    isStartValid = false;

    timer = setInterval(() => {
      // condition to check when timer ends
      if (minutes.value == 0 && seconds.value == 0) {
        stopTimer();
        ringColor.style.stroke = '#900A0A';

        setTimeout(() => {
          // alert messgage when timer ends, and ring turns to red color
          alert("GAME OVER! Time's UP ; )");
          ringColor.style.stroke = '#09A65A';
        }, 100);
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
};

// function to stop the timer, and toggle stop button to start button
const stopTimer = () => {
  startButton.innerHTML = 'Start';
  clearInterval(timer);
};

// exporting all functions
export { isValidTime, startTimer, stopTimer };
