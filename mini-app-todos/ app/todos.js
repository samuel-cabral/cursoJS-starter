let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos() {
  listElement.innerHTML = '';

  for (let todo of todos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);

    let linkElement = document.createElement('a');
    let linkText = document.createTextNode('Excluir');

    linkElement.setAttribute('href', '#');

    var position = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + position + ')');

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);

    todoElement.appendChild(linkElement);
    linkElement.appendChild(linkText);
  }
}

renderTodos();

function addTodo() {
  let todoText = inputElement.value; //recupera o valor do input

  todos.push(todoText); // adiciona novo todo na lista de todos
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {


  localStorage.setItem('list_todos', JSON.stringify(todos));
}