let startTime;
let elapsedTime = 0;
let intervalId;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', function () {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
        startBtn.textContent = 'Resume';
        pauseBtn.disabled = false;
        isRunning = true;
        console.log("Stopwatch started/resumed");
    }
});

pauseBtn.addEventListener('click', function () {
    if (isRunning) {
        clearInterval(intervalId);
        pauseBtn.disabled = true;
        isRunning = false;
        console.log("Stopwatch paused");
    }
});

resetBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    isRunning = false;
    elapsedTime = 0;
    startBtn.textContent = 'Start';
    pauseBtn.disabled = true;
    display.textContent = '00:00:00';
    console.log("Stopwatch reset");
});

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
