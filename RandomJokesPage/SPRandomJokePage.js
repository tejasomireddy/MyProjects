let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");
let jokeBtnEl = document.getElementById("jokeBtn");

function sendGetJokes() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            jokeTextEl.textContent = jsonData.code;
            console.log(jokeTextEl);
            jokeTextEl.textContent = JSON.stringify(jsonData.value);
        });

}

jokeBtnEl.addEventListener("click", sendGetJokes);