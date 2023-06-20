const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const ul = document.getElementById("ingredients");
const liArr = [];
ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.innerText = ingredient;
    li.classList.add("item");
    liArr.push(li);
});
ul.append(...liArr);
