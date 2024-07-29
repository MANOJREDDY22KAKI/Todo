document.getElementById('todoform').addEventListener('submit', function(e){
    e.preventDefault(); 
    const todoInputElement = document.getElementById('todoitem');
    const todo = todoInputElement.value.trim();
    if(todo !== ''){
        addTodoItem(todo);
        todoInputElement.value = ''; // Reset input value
    } else {
        alert('Please enter a todo item');
    }
});

function addTodoItem(todo) {
    const todolist = document.getElementById('todolist');
    const list_item = document.createElement('li');
    list_item.classList.add('flex','ml-3' ,'mt-5','mb-5');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('ml-2', 'mr-3');
    checkbox.addEventListener('change',function(e){
        list_item.classList.toggle('line-through');
        
    })

    const label = document.createElement('label');
    label.classList.add('text-gray-700'); 
    label.textContent = todo;

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.classList.add('ml-3', 'bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
    editBtn.style.width = '32px'; 
    editBtn.style.height = '32px'; 
    editBtn.style.display = 'flex'; 
    editBtn.style.alignItems = 'center'; 
    editBtn.style.justifyContent = 'center';
    editBtn.addEventListener('click',function(e){
        e.preventDefault();
        const confirmEdit = confirm('Are you sure you want to edit this item?');
        if(confirmEdit){
            const newinput = prompt('Enter new todo');
            if(newinput !== null){
                label.textContent = newinput;
            }
        }

    })

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('ml-3', 'bg-red-500', 'hover:bg-red-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded');
    deleteBtn.style.width = '32px'; 
    deleteBtn.style.height = '32px'; 
    deleteBtn.style.display = 'flex'; 
    deleteBtn.style.alignItems = 'center'; 
    deleteBtn.style.justifyContent = 'center';
    deleteBtn.addEventListener('click',function(e){
        e.preventDefault();
        const confirmDelete = confirm('Are you sure you want to delete this item?');
        if(confirmDelete){
            list_item.remove();
        }
        
    })



    list_item.appendChild(checkbox);
    list_item.appendChild(label);
    list_item.appendChild(editBtn);
    list_item.appendChild(deleteBtn);
    todolist.appendChild(list_item);   
}
