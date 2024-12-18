const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if(taskText.trim() !== '') {
        createTask(taskText);
        taskInput.value = '';
    }
});

function createTask(text) {
    const li = document.createElement('li');

    li.innerHTML = `<span>${text}</span>`;

    const doneButton = document.createElement('button');
    doneButton.innerText = 'Done';
    doneButton.classList.add('done-button');
    doneButton.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

