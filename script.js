const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let classCount = 0;

function newTodo() {
  const section = document.createElement("div");
  section.className = classNames.TODO_ITEM;


  const item = document.createElement("li");
  item.innerHTML = task.value;
  item.className = classNames.TODO_TEXT;
  task.value="";

  const box = document.createElement("input");
  box.type = "checkbox";
  box.className = classNames.TODO_CHECKBOX;
  box.addEventListener("click", function () {
    uncheckedCountSpan.innerHTML = document.querySelectorAll('input[type="checkbox"]:checked').length;
  })
  
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  // box.className = classNames.TODO_DELETE;
  deleteBtn.addEventListener("click", function () {
    let li = deleteBtn.parentNode;
    li.parentNode.removeChild(li)
    itemCountSpan.innerHTML--;
    uncheckedCountSpan.innerHTML = document.querySelectorAll('input[type="checkbox"]:checked').length;
  })


  itemCountSpan.innerHTML++;

  section.appendChild(box);
  section.appendChild(item);
  section.appendChild(deleteBtn);
  list.appendChild(section);
}


