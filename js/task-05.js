const nameInput = document.getElementById("name-input");
const nameOtput = document.getElementById("name-output");

nameInput.addEventListener("input", inputClick);
function inputClick(evt) {
    const inputValue = evt.target.value;
    if (inputValue === "") {
        nameOtput.textContent = "Anonymous";
    } else {
        nameOtput.textContent = inputValue;
    }
}
