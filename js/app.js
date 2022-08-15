'use strict';
// Event Listener for "Add to List"
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', newListItem);

const listArray = [];

// Event Handler for "Add to List"
function newListItem(event){
  event.preventDefault();

  let newItem = document.getElementById('newInput').value;
  listArray.push(newItem);

  let unorderedList = document.getElementById('list');
  let listItem = document.createElement('li');

// create checkboxes next to each item

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'li';
  checkbox.name = 'checkbox';
  checkbox.value = 1;
  checkbox.classList.add('li');

// Create label to display text and nest inside li
  let label = document.createElement('label');
  label.htmlFor = 'li';
  label.classList.add('strikethrough');
  label.appendChild(document.createTextNode(listArray[listArray.length - 1]));

// Append checkbox and label to li and then to ul
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  unorderedList.appendChild(listItem);
}
