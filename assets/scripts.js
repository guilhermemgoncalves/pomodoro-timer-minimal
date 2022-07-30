/*

var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);
<progress value="0" max="10" id="progressBar"></progress>



-----------------------

var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = "You have been here for " + seconds + " seconds.";
}

var cancel = setInterval(incrementSeconds, 1000);

*/

document.getElementById("SetMinutes").addEventListener("change", () => {
  let displayedMinute = document.getElementById("SetMinutes").value;
  if (displayedMinute < 10) {
    displayedMinute = 0 + displayedMinute;
  }

  if (displayedMinute > 0 && displayedMinute < 60) {
    document.getElementById("DisplayMinute").innerText = displayedMinute;
  }
});

document.getElementById("SetSeconds").addEventListener("change", () => {
  let displayedSecond = document.getElementById("SetSeconds").value;
  if (displayedSecond < 10) {
    displayedSecond = 0 + displayedSecond;
  }
  if (displayedSecond > 0 && displayedSecond < 60) {
    document.getElementById("DisplaySecond").innerText = displayedSecond;
}
});

document.getElementById("SubmitButton").addEventListener("click", () => {
    document.getElementById("SetSeconds").disabled = true;
    document.getElementById("SetMinutes").disabled = true;
    document.getElementById("SubmitButton").disabled = true;
    
    CountDown()
    
});

function CountDown() {

    window.setInterval(()=>{
        let displayedSecond = document.getElementById("DisplaySecond").textContent;
        let displayedMinute = document.getElementById("DisplaySecond").value;

    
    console.log(displayedSecond);
    console.log(Number(displayedSecond));
    displayedSecond--;
    document.getElementById("DisplaySecond").innerText = displayedSecond;    
    }, 1000)
    
    

}

document.getElementById("ResetButton").addEventListener("click", () => {
  document.getElementById("SetSeconds").disabled = false;
  document.getElementById("SetMinutes").disabled = false;
  document.getElementById("SubmitButton").disabled = false;
});
