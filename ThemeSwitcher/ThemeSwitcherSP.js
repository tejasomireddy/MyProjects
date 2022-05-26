let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");
let backgroundImage = bgContainerEl.style.backgroundImage;
let dark = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png";
let light = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png";

themeUserInputEl.addEventListener("keydown", function(event) {
    let themeUserInput = themeUserInputEl.value;
    if (themeUserInput === "" && event.key === "Enter") {
        alert("Enter the theme");
        return;
    } else if (themeUserInput !== "Dark" && themeUserInput !== "Light" && event.key === "Enter") {
        alert("Enter valid theme");
        return;
    } else if (backgroundImage === light && themeUserInput === "Light" && event.key === "Enter") {
        alert("Enter valid theme");
        return;
    } else if (backgroundImage === dark && themeUserInput === "Dark" && event.key === "Enter") {
        alert("Enter valid theme");
        return;
    } else {
        if (themeUserInput === "Dark" && event.key === "Enter") {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            headingEl.style.color = "#ffffff";
        } else if (themeUserInput === "Light" && event.key === "Enter") {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            headingEl.style.color = "#014d40";
        }
    }
});