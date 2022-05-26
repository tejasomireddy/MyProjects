let counterElement = document.getElementById("countervalue");

function onIncrement() {
    previousCounterValue = counterElement.textContent;
    updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counteElement.style.color = "red";
    } else {
        counterElement.style.color = "Black"
    }
}

function onDecrement() {
    previousCounterValue = counterElement.textContent;
    updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterElement.textContent = updatedCounterValue;
    if (updatedCounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounterValue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

function onReset() {
    updatedCounterValue = 0;
    counterElement.textContent = updatedCounterValue;
    counterElement.style.color = "black"
}