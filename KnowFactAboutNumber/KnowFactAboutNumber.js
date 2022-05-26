let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function getFactofEnteredNumber() {
    let searchInput = userInputEl.value
    if (searchInput === "") {
        alert("Enter a number");
    } else {
        let url = "https://apis.ccbp.in/numbers-fact?number=" + searchInput;
        spinnerEl.classList.remove("d-none");
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none");
                factEl.textContent = jsonData.fact;
            });
    }
}

userInputEl.addEventListener("keyup", getFactofEnteredNumber);