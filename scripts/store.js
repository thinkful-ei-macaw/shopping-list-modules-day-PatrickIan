let items = [];
let hideCheckedItems = false;

import item from './item.js';

export default {
  items,
  hideCheckedItems,
  addItems,
  findById,
  findAndToggleChecked,
  findAndDelete,
  findAndUpdateName
}

;
 function findById(id) {
   return store.items.find(id)
 }

 function addItems(name) {
   try {
     validateName(name);
    let item = create(name);
    (item.create).push(this.items);
   } catch(error) {
     console.log(`Cannot add item: ${error.message}`)
   }
 }

 function findAndToggleChecked(id) {
   let foundItem = this.findById(id);
   foundItem.checked = !foundItem.checked;
 }

 function findAndUpdateName(id, newName) {
   try {
     validateName(newName);
     findById(id);
   } catch {
    console.log(`Cannot update name: ${error.message}`);
   }
 }

 function findAndDelete(id) {
   this.items.filter(findById(id));
 }