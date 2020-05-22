const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const todoText = document.getElementById(classNames.TODO_TEXT)

todoText.addEventListener('keyup', function onEvent(e) {
  if (e.keyCode === 13) {
      newTodo();
  }
});

let itemCount = 0;
let itemUncheckedCount = 0;

function updateCount(count) {

  itemCount = itemCount + count;
  itemCountSpan.innerText =  itemCount;  
}

function updateUncheckedCount(count) {

  itemUncheckedCount= itemUncheckedCount + count;
  uncheckedCountSpan.innerText = itemUncheckedCount;
}

let deleteTask = function (){
  
  let itemDeleting = this.parentNode;
  let listItens = itemDeleting.parentNode; 

  listItens.removeChild(itemDeleting);

  updateCount(-1);

  if (!itemDeleting.firstChild.checked)  
    updateUncheckedCount(-1);
}

let countUncheck = function(){

  let isChecked = this.checked;
  
  if (isChecked) updateUncheckedCount(-1)
  else updateUncheckedCount(1);
}

function newTodo() {

  if (todoText.value != "")
  {
    let item = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = classNames.TODO_CHECKBOX;
    checkbox.onclick = countUncheck;
    item.appendChild(checkbox);

    let label = document.createElement("label");
    label.innerText = todoText.value;
    item.appendChild(label);

    let delButton = document.createElement("button")
    delButton.innerText = "delete"
    delButton.onclick= deleteTask;
    item.appendChild(delButton)

    list.appendChild(item);

    updateCount(1);
    updateUncheckedCount(1);

    todoText.value = '';
  }

  
}
