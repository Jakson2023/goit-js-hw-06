const inputForm = document.querySelector("#validation-input");
const dataLength = inputForm.getAttribute("data-length");

inputForm.addEventListener("blur", inputValid);
function inputValid(evt) {
    if (evt.currentTarget.value.length === Number(dataLength)) {
        inputForm.classList.remove("invalid");
        inputForm.classList.add("valid");
    } else {
        inputForm.classList.remove("valid");
        inputForm.classList.add("invalid");
    }
}
