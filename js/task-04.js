let counterValue = 0;
const valueSpan = document.getElementById("value");
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');

btnIncrement.addEventListener("click", onClickUp);
function onClickUp() {
    counterValue += 1;
    valueSpan.textContent = counterValue;
}

btnDecrement.addEventListener("click", onClickDown);
function onClickDown() {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
}
