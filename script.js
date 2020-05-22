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

let itemCount = 0;

let deleteTask = function (){
  
  let itemDeleting = this.parentNode;
  alert(typeof(itemDeleting))
  let listItens = itemDeleting.parentNode; 

  listItens.removeChild(itemDeleting);

  itemCount = itemCount - 1;
  itemCountSpan.innerText =  itemCount;  
}

function newTodo() {

  if (todoText.value != "")
  {
    let item = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = classNames.TODO_CHECKBOX;
    item.appendChild(checkbox);

    let label = document.createElement("label");
    label.innerText = todoText.value;
    item.appendChild(label);

    let delButton = document.createElement("button")
    delButton.innerText = "delete"
    delButton.onclick= deleteTask;
    item.appendChild(delButton)

    list.appendChild(item);

    itemCount = itemCount + 1;
    itemCountSpan.innerText =  itemCount;  

    todoText.value = '';

  }

  
}
