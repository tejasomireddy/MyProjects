function switchoff() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent = "Switched Off";
    document.getElementById("buttonon").style.backgroundColor = "#22c55e";
    document.getElementById("buttonoff").style.backgroundColor = "#cbd2d9";
}

function switchon() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent = "Switched On";
    document.getElementById("buttonoff").style.backgroundColor = "#e12d39";
    document.getElementById("buttonon").style.backgroundColor = "#cbd2d9";
}