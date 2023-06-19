const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const ul = document.getElementById("ingredients");
ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.innerText = ingredient;
    li.classList.add("item");
    ul.append(li);
    console.log(ul);
});
