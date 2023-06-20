const inputForm = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
spanText.style.fontSize = inputForm.value + "px";
inputForm.addEventListener("input", controlSize);

function controlSize(evt) {
    spanText.style.fontSize = evt.target.value + "px";
}
