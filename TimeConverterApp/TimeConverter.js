let convertBtnEl = document.getElementById("convertBtn");

let errMsgEl = document.getElementById("errorMsg");
errMsgEl.textContent = "";

convertBtnEl.addEventListener("click", function getSeconds() {
    let hoursInputEl = parseInt(document.getElementById("hoursInput").value);
    let minutesInputEl = parseInt(document.getElementById("minutesInput").value);
    let seconds = ((hoursInputEl) * 3600) + ((minutesInputEl) * 60);

    let showSeconds = document.getElementById("timeInSeconds");
    showSeconds.classList.remove("card", "container")
    if (isNaN(hoursInputEl)) {
        errMsgEl.textContent = "please enter a valid number of hours";
        errMsgEl.style.color = "#f7faf5";
    } else if (isNaN(minutesInputEl)) {
        errMsgEl.textContent = "please enter a valid number of minutes";
        errMsgEl.style.color = "#f7faf5";
    } else {
        errMsgEl.textContent = ''
        showSeconds.textContent = seconds + "s";
        console.log(showSeconds)
        showSeconds.classList.add("card", "container")
        showSeconds.style.color = "#ffffff"
    }

});