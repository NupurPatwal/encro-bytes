const taskList = document.getElementById("taskList");
const txtinp = document.getElementById("txtinp");
const taskArr = [];

window.addEventListener("load", function () {
  const task = JSON.parse(localStorage.getItem("task"));
  displayArr(task);
});
// CREATE
btn.addEventListener("click", function () {
  if (localStorage.getItem("task")) {
    const task = JSON.parse(localStorage.getItem("task"));
    task.push(txtinp.value);
    localStorage.setItem("task", JSON.stringify(task));
    displayArr(task);
  } else {
    taskArr.push(txtinp.value);
    localStorage.setItem("task", JSON.stringify(taskArr));
    displayArr(taskArr);
  }
});

// READ
function displayArr(arr) {
  taskList.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    taskList.innerHTML += `<div>
        <li>${arr[i]}
        <button onclick="updateTodo(${i})">Update</button>
        <button onclick="deleteTodo(${i})">Delete</button>
        </li>
        </div>`;
  }
}
// Update
const updateTodo = (i) => {
  let updatedval = prompt("Enter the value...");
  const task = JSON.parse(localStorage.getItem("task"));
  task.splice(i, 1, updatedval);
  localStorage.setItem("task", JSON.stringify(task));
  displayArr(task);
};

// Delete
const deleteTodo = (i) => {
  const task = JSON.parse(localStorage.getItem("task"));
  task.splice(i, 1);
  localStorage.setItem("task", JSON.stringify(task));
  displayArr(task);
};
