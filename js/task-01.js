const categories = document.querySelector("#categories");
const categoriesAll = `Number of categories: ${categories.children.length}`;
console.log(categoriesAll);

const items = document.querySelectorAll(".item h2");
const elements = items.forEach(element => 
  console.log(`Category: ${element.textContent}
  Elements: ${element.nextElementSibling.children.length}`));