// Get DOM elements
const taskListElem = document.getElementById("taskList"); //empty div
const inputElem = document.getElementById("txtinp");
const addButtonElem = document.getElementById("btn");

// Initialize tasks array
let tasksArray = [];

// Load tasks from localStorage when window loads
window.addEventListener("load", function () {
  tasksArray = JSON.parse(localStorage.getItem("tasksData")) || [];
  displayTasks();
});

// Event listener for adding a task
addButtonElem.addEventListener("click", function () {
  const newTask = inputElem.value.trim();
  if (newTask !== "") {
    tasksArray.push(newTask);
    localStorage.setItem("tasksData", JSON.stringify(tasksArray));
    displayTasks();
    inputElem.value = ""; // Clear input field
  } else {
    alert("Please enter a task!");
  }
});

// Function to display tasks in the UI
function displayTasks() {
  taskListElem.innerHTML = ""; // Clear existing tasks
  for (let i = 0; i < tasksArray.length; i++) {
    const taskItemElem = document.createElement("li");
    taskItemElem.innerHTML = `
      <span>${i + 1}. ${tasksArray[i]}</span>
      <div>
        <button onclick="updateTask(${i})">Update</button>
        <button onclick="deleteTask(${i})">Delete</button>
      </div>`;
    taskListElem.appendChild(taskItemElem);
  }
}

// Function to update a task
function updateTask(index) {
  let updatedTask = prompt("Enter the updated task:");
  if (updatedTask !== null) {
    updatedTask = updatedTask.trim();
    if (updatedTask !== "") {
      tasksArray[index] = updatedTask;
      localStorage.setItem("tasksData", JSON.stringify(tasksArray));
      displayTasks();
    } else {
      alert("Task cannot be empty!");
    }
  }
}

// Function to delete a task
function deleteTask(index) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    tasksArray.splice(index, 1);
    localStorage.setItem("tasksData", JSON.stringify(tasksArray));
    displayTasks();
  }
}

/*// Get DOM elements
const taskListElement = document.getElementById("taskList"); // empty div
const inputElement = document.getElementById("txtinp"); // listed element
const addButton = document.getElementById("btn"); // submit button

// Initialize tasks array
let taskArray = [];

// Load tasks from localStorage when window loads
window.addEventListener("load", function () {
  taskArray = JSON.parse(localStorage.getItem("storedTasks")) || [];
  displayTasks();
});

// Event listener for adding a task
addButton.addEventListener("click", function () {
  const taskText = inputElement.value.trim();
  if (taskText !== "") {
    taskArray.push(taskText);
    localStorage.setItem("storedTasks", JSON.stringify(taskArray));
    displayTasks();
    inputElement.value = ""; // Clear input field
  } else {
    alert("Please enter a task!");
  }
});

// Function to display tasks in the UI
function displayTasks() {
  taskListElement.innerHTML = ""; // Clear existing tasks
  taskArray.forEach((task, index) => {
    const taskItemElement = document.createElement("li");
    taskItemElement.innerHTML = `
      <span>${index + 1}. ${task}</span>
      <div>
        <button onclick="updateTask(${index})">Update</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>`;
    taskListElement.appendChild(taskItemElement);
  });
}

// Function to update a task
function updateTask(index) {
  let updatedTask = prompt("Enter the updated task:");
  if (updatedTask !== null) {
    updatedTask = updatedTask.trim();
    if (updatedTask !== "") {
      taskArray[index] = updatedTask;
      localStorage.setItem("storedTasks", JSON.stringify(taskArray));
      displayTasks();
    } else {
      alert("Task cannot be empty!");
    }
  }
}

// Function to delete a task
function deleteTask(index) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    taskArray.splice(index, 1);
    localStorage.setItem("storedTasks", JSON.stringify(taskArray));
    displayTasks();
  }
}
  */
