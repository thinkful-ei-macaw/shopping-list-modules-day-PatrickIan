let items = [];
let hideCheckedItems = false;

import item from './item.js';

export default {
  items,
  hideCheckedItems
};
 function findById(id) {
   return store.items.find(id)
 }

 function addItems(name) {
   try {
     validateName(name);
    let item = create(name);
    //(item.create).push(this.items);
   } catch(error) {
     console.log(`Cannot add item: ${error.message}`)
   }
 }

 function findAndToggleChecked(id, newName) {

 }