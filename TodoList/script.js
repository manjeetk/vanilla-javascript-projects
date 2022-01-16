const form = document.getElementById("form");
const input = document.getElementById("input");
const todosList = document.getElementById("todos");

//Use localStorage to store todos
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Check if there is any todo in localStorage and add them to the list
if(todos) {
    todos.forEach(todo => addTodo(todo));
}

// Add todo on enter key press
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

// Create a function to add todo to the list
function addTodo(todo) {
    let todoText = input.value;
    if(todo) {
        todoText = todo.text
    }
    if(todoText) {
        // Create a li for adding the todo list
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            //Add completed class to the li
            todoEl.classList.add('completed');
        }
        todoEl.innerText = todoText;
        //Add click event listener to the li to toggle the completed class
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateList();
        });
        //Add delete event listener to the li to delete the li
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateList();
        });
        //Add the li to the existng list
        todosList.appendChild(todoEl);
        input.value = '';
        //Update the localStorage
        updateList();
    }
}

function updateList() {
    //Get all the todos from the list
    todosEl = document.querySelectorAll('li');
    const todos = [];
    //Loop through the todos and add them to the todos array
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    });
    //Store the todos in the localStorage and stringify it
    localStorage.setItem('todos', JSON.stringify(todos))
}
