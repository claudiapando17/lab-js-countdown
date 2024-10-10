const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

const startButton = document.querySelector('button');
startButton.addEventListener('click', () => {
startCountdown();  
});




// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  // Your code goes here ...

  const timeDisplay = document.getElementById ('time');
  startButton.disabled = true;


  timer = setInterval(function () {
  console.log(remainingTime);
  remainingTime--;
  timeDisplay.innerHTML = remainingTime;


  if (remainingTime <= 0) {
    clearInterval(timer);
    showToast('Lift off! 🚀');
    startButton.disabled = false;
    remainingTime = DURATION;
  }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!")


  // Your code goes here ...

  const toastElement = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  toastMessage.innerHTML = message;
  toastElement.classList.add('show');


  setTimeout(() => {
    toastElement.classList.remove('show');
  }, 3000);
}





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


