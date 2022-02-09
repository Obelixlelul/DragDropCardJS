/** DRAG AND DROP */
const dropItems = document.getElementById('drop__items');
// var sortable = Sortable.create(dropItems);

new Sortable(dropItems, {
    animation: 350,
});