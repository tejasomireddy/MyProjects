let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");

let countdown = 10;
let intervalId = setInterval(function() {
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "Boom!";
        clearInterval(intervalId);
    }
    countdown = countdown - 1;
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let bombdefuser = defuserEl.value;
    if (event.key === "Enter" && bombdefuser === "defuse" && countdown !== 0) {
        timerEl.textContent = "You did it";
        clearInterval(intervalId);
    }
})