// Select the HTML elements and initialize an empty array to store tasks

const taskList = document.getElementById("taskList"); // The element to display the task list
const txtinp = document.getElementById("txtinp"); // The input field for entering new tasks
const taskArr = []; // Array to store tasks

// Event listener for the window load event to retrieve and display stored tasks

window.addEventListener("load", function () {
  const task = JSON.parse(localStorage.getItem("task")); // Retrieve tasks from localStorage and parse them to an array
  displayArr(task); // Display the retrieved tasks
});

// Event listener for the button click event to add a new task

btn.addEventListener("click", function () {
  if (localStorage.getItem("task")) {
    // Check if there are existing tasks in localStorage

    const task = JSON.parse(localStorage.getItem("task")); // Retrieve and parse existing tasks
    task.push(txtinp.value); // Add the new task to the array
    localStorage.setItem("task", JSON.stringify(task)); // Update localStorage with the new task array
    displayArr(task); // Display the updated task list
  } else {
    taskArr.push(txtinp.value); // Add the new task to the empty taskArr array
    localStorage.setItem("task", JSON.stringify(taskArr)); // Store the taskArr array in localStorage
    displayArr(taskArr); // Display the task list
  }
});

// Function to display the tasks in the taskList element

function displayArr(arr) {
  taskList.innerHTML = ""; // Clear the current task list display
  for (let i = 0; i < arr.length; i++) {
    // Loop through each task in the array
    taskList.innerHTML += `<div>
        <li>${arr[i]}
        <button onclick="updateTodo(${i})">Update</button>
        <button onclick="deleteTodo(${i})">Delete</button>
        </li>
        </div>`;

    // Create a list item with the task and "Update" and "Delete" buttons
  }
}

// Function to update a task

const updateTodo = (i) => {
  let updatedval = prompt("Enter the new task..."); // Prompt the user for a new task value
  const task = JSON.parse(localStorage.getItem("task")); // Retrieve and parse existing tasks
  task.splice(i, 1, updatedval); // Replace the task at index i with the new value
  localStorage.setItem("task", JSON.stringify(task)); // Update localStorage with the modified task array
  displayArr(task); // Display the updated task list
};

// Function to delete a task

const deleteTodo = (i) => {
  const task = JSON.parse(localStorage.getItem("task")); // Retrieve and parse existing tasks
  task.splice(i, 1); // Remove the task at index i
  localStorage.setItem("task", JSON.stringify(task)); // Update localStorage with the modified task array
  displayArr(task); // Display the updated task list
};
