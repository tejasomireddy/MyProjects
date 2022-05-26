let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomnumber = Math.ceil(Math.random() * 100);
function checkGuess() {
    let gussednumber = parseInt(userInput.value);
    if (gussednumber > randomnumber) {
        gameResult.textContent = "Too High, Try again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussednumber < randomnumber) {
        gameResult.textContent = "Too Low, Try again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (gussednumber === randomnumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "Green";
    } else {
        gameResult.textContent = "Please provide a valid Input";
        gameResult.style.backgroundColor = "Red"
    }

}