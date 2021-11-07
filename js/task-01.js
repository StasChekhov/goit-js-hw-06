const categories = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categories.length}`)

Array.prototype.forEach.call(categories, (element) => {
    const listTitle = element.querySelector(`h2`).innerHTML;
    const listItem = element.querySelectorAll(`li`).length;

    console.log(`Category: ${listTitle}`);
    console.log(`Elements: ${listItem}`)
});