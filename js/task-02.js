const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map(el => {
  const items = document.createElement("li");
  items.textContent = el;
  items.classList.add("item");
  return items;
});

const inserting = list.append(...elements);
