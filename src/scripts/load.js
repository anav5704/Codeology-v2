const blurDiv = document.querySelector(".blur-load")
const img = blurDiv.querySelector("img")

function loaded() {
    blurDiv.classList.add("loaded")
}

if (img.complete) {
    loaded();
}

else {
    img.addEventListener("load" ,loaded)
}