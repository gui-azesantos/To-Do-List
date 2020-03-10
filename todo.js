var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function Render() {
    listElement.innerHTML = ''
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick' , 'deleteTodo(' + pos + ')');      

        var linkText = document.createTextNode('Excluir')
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

Render();

function AddTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    Render();
    saveToStorage();

}

buttonElement.onclick = AddTodo;

function deleteTodo() {
    todos.splice(0, 1);
    Render();
    saveToStorage();
}

function saveToStorage(){
    
    localStorage.setItem('list_todos', JSON.stringify(todos));
}