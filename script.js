const minutesEl = document.getElementById('#minutes')
const secondsEl = document.getElementById('#seconds')
const milisecondsEl = document.getElementById('#miliseconds')
const start = document.getElementById('#startBtn')
const pause = document.getElementById('#pauseBtn')
const resume = document.getElementById('#resumeBtn')
const reset = document.getElementById('#resetBtn')


let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

start.addEventListener('click', startTimer);

    function startTimer() { 

        interval = setInterval(() => {
        if(!isPaused) {
            miliseconds += 10; 

            if(miliseconds === 1000){
                seconds++;
                miliseconds = 0;
            }

            if(seconds === 60) {
                minutes++; 
                seconds = 0;
            }
        }

        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
        milisecondsEl.textContent = miliseconds;

    },10);
}






    
