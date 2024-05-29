
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    const todos = JSON.parse(localStorage.getItem('todos')) ||  [{text: "JavaScript"}];

    // const todos = [
    //     {text: "JavaScript"},
    //     {text: "React"},

    // ];
    
    const saveTodos = () => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }

    const renderTodos = ( ) => {
        todoList.innerHTML = '';
        todos.forEach((todo,index) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${todo.text}</span>
            <div class="action">
            <button class="edit" data-index = "${index}"> Edit </button>
            <button class="delete" data-index = "${index}"> Delete </button>
            </div>
            `;
            todoList.appendChild(li);
        });
    };



    const addTodo = () => {
        const todoText = todoInput.value.trim();
        // console.log(todoText); khush
        if(todoText !== ""){
            todos.push({text: todoText});
            todoInput.value = '';
            saveTodos();
            renderTodos();
        }
    };

    const deleteTodo = (index) => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    };

    const editTodo = (index) => {
        const newTodoText = prompt('Edit your todo:',todos[index].text);
        if(newTodoText !== null && newTodoText.trim() !== ''){
            todos[index].text = newTodoText.trim();
            saveTodos();
            renderTodos();
        }
    };

    todoList.addEventListener('click', (e) => {
        if(e.target.classList.contains('delete')){
            const index = e.target.getAttribute('data-index');
            deleteTodo(index);
        }else if(e.target.classList.contains('edit')){
            const index = e.target.getAttribute('data-index');
            editTodo(index);
        }
    });

    

    addBtn.addEventListener('click',addTodo);

    renderTodos();
});