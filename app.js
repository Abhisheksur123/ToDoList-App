document.addEventListener('DOMContentLoaded', () => {
    // Get references to HTML elements
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Retrieve tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display existing tasks
    displayTasks();

    // Function to add a new task
    window.addTask = function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Add task to the array
            tasks.push(taskText);

            // Save tasks to local storage
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // Display tasks
            displayTasks();

            // Clear the input field
            taskInput.value = '';
        }
    };

    // Function to display tasks
    function displayTasks() {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            listItem.setAttribute('onclick', `removeTask(${index})`);
            taskList.appendChild(listItem);
        });
    }

    // Function to remove a task
    window.removeTask = function (index) {
        // Remove the task from the array
        tasks.splice(index, 1);

        // Save tasks to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Display tasks
        displayTasks();
    };

    // Function to clear all tasks
    window.clearTasks = function () {
        // Clear the array
        tasks = [];

        // Save tasks to local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Display tasks
        displayTasks();
    };
});
