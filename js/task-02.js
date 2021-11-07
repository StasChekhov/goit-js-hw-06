const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listElement = document.querySelector("#ingredients")

const ingrLi = items => {
  return items.map((item) => {
    const ingrLi = document.createElement("li");
    ingrLi.textContent = item;
    ingrLi.classList.add("item");
    return ingrLi
  })
}
const elements = ingrLi(ingredients);
listElement.append(...elements)

