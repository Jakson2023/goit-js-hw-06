const buttonChange = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
buttonChange.addEventListener("click", onClick);

function onClick() {
    const rndColor = getRandomHexColor();
    document.body.style.backgroundColor = rndColor;
    colorSpan.textContent = rndColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
