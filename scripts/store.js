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
 function findById(ident) {
   
   const result =  items.find( element => element.id === ident);
   return result;
 }

 function addItems(name) {
   try {
     item.validateName(name);
    let thing = item.create(name);
    (this.items).push(thing);
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
     item.validateName(newName);
     findById(id).name = newName;
   } catch {
    console.log(`Cannot update name: ${error.message}`);
   }
 }

 function findAndDelete(id) {
   let checkedId = id
   let correctId = findById(checkedId);
   let newArr =  this.items.filter(item => item !== correctId);
   this.items = newArr;
   console.log(newArr)
 }