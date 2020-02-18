import shoppingList from './shopping-list.js';
import store from './store.js';
import item from './item.js';

const main = function () {
shoppingList.bindEventListeners();
shoppingList.render();
};
store.addItems('bananas');
store.addItems('apples');
store.addItems('rice');
// grab the id of the first store item (bananas)
let id = store.items[0].id;
// delete this item from the store
store.findAndDelete(id);
shoppingList.render();

$(main);