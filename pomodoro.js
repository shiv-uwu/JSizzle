// ---------- //
// -SHIV-UWU- //
// ---------- //

// note: code does not work raw, you need to add html buttons and some css to make it functional

console.log("Made by github.com/shiv-uwu")

const timerDisplay = document.querySelector("#timer"); // get timer display
const startButton = document.querySelector("#start"); // get start button
const stopButton = document.querySelector("#stop"); // get stop button

const pomodoroTime = 25 * 60; 
const breakTime = 5 * 60; 

let timeRemaining = pomodoroTime; 
let timerId; 

function startTimer() { // function to start timer
  displayTimeRemaining();
  
  startButton.disabled = true; // disable start button
  stopButton.disabled = false;
  
  timerId = setInterval(() => { // set interval to update timer
    timeRemaining--;
    
    displayTimeRemaining();
    
    if (timeRemaining === 0) { // check if timer is done
      clearInterval(timerId);
      playSound();
      if (isPomodoroTime()) { 
        timeRemaining = breakTime;
      } else {
        timeRemaining = pomodoroTime;
      }
      startTimer();
    }
  }, 1000);
}

function stopTimer() { // function to stop timer
  clearInterval(timerId);
  
  timeRemaining = pomodoroTime;
  displayTimeRemaining();
  
  stopButton.disabled = true; // disable stop button
  startButton.disabled = false; // enable start button
}

function displayTimeRemaining() { // function to display time remaining
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function isPomodoroTime() { // function to check if it is pomodoro time
  const minutesElapsed = (pomodoroTime - timeRemaining) / 60;
  return minutesElapsed % 30 < 25;
}

function playSound() { // function to play sound
  const audio = new Audio("ring.mp3");
  audio.play();
}

startButton.addEventListener("click", startTimer); // add event listener to start button
stopButton.addEventListener("click", stopTimer); // add event listener to stop button