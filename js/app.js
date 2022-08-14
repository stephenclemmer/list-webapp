'use strict';
// Event Listener for "Add to List"
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", newListItem);

const listArray = [];

// Event Handler for "Add to List"
function newListItem(event){
  event.preventDefault();

  let newItem = document.getElementById("newInput").value;
  listArray.push(newItem);

  let unorderedList = document.getElementById("list");
  let listItem = document.createElement("li");

  listItem.appendChild(document.createTextNode(listArray[listArray.length - 1]));
  unorderedList.appendChild(listItem);
}
