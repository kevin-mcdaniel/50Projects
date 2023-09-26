const elForm = document.getElementById('form');
const elInput = document.getElementById('input');
const elTodos = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

function addTodo(todo){
    let todoText = todo ? todo.text : input.value;
    if(todoText){
        const elTodo = document.createElement('li');
        if(todo && todo.completed){
            elTodo.classList.add('completed');
        }
        
        elTodo.innerText = todoText;
        elTodo.addEventListener('click', () => {
            elTodo.classList.toggle('completed');
            updateLS();
        });
        elTodo.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            elTodo.remove();
            updateLS();
        });
        elTodos.appendChild(elTodo);
        input.value='';
        updateLS();
    }
}

function updateLS(){
    const elTodos = document.querySelectorAll('.todos li');
    const todos = [];

    elTodos.forEach(elTodo => {
        todos.push({
            text: elTodo.innerText,
            completed: elTodo.classList.contains('completed')

        })
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

if(todos){
    todos.forEach(todo => {
        addTodo(todo);
    })
}

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

