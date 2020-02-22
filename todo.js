var listElement = document.querySelector('#app ul');
var inputElement = document.querrySelector('#app input');
var buttonElement = document.querrySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar JavaScript',
    'Acessar Comunidade'
];

function Render() {
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}
Render()