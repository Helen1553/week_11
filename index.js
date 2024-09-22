document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('input');
    const taskValue = input.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');

        newTask.textContent = taskValue;
        newTask.addEventListener('click', toggleTaskCompletion);
        taskList.appendChild(newTask);
    }
}

function toggleTaskCompletion(event) {
    event.target.classList.toggle('completed');
}
