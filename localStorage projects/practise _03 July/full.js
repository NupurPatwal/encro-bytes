//  get all dom elements:
const todoInput = document.getElementById("div-input");
const todoEmp = document.getElementById("div-Emp"); // empty div
const addButton = document.getElementById("btn");

//  initiliazing the array:
let taskArr = [];
//  window loads:

window.addEventListener("load", () => {
  //  data local storage se lp or task arr m daal do parse krke
  taskArr = JSON.parse(localStorage.getItem("dataSavedInLS")) || [];

  // calling fn:
  displayArr(taskArr);
});

// Event lister for adding task:
addButton.addEventListener("click", function () {
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    taskArr.push(newTask);
    localStorage.setItem("dataSavedInLS", JSON.stringify(taskArr));

    displayArr(taskArr);
    todoInput.value = "";
  } else {
    alert(`Type something.`);
  }
});

//calling function code:
function displayArr(taskArr) {
  todoEmp.innerHTML = "";
  for (let i = 0; i < taskArr.length; i++) {
    todoEmp.innerHTML += `<span>${i + 1} ${taskArr[i]} </span>
    <div>
          <button onclick="updateItem(${i})">
            Update
          </button>
          <button onclick="deleteItem(${i})">
            Delete
          </button>
        </div>`;
  }
}

// update:
function updateItem(i) {
  let updateVal = prompt("Enter the updated value...");
  // const dataArr = JSON.parse(localStorage.getItem("dataSavedInLS"));
  taskArr.splice(i, 1, updateVal);
  localStorage.setItem("dataSavedInLS", JSON.stringify(taskArr));
  displayArr(taskArr);
}

// Function to delete a task
function deleteItem(index) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    taskArr.splice(index, 1);
    localStorage.setItem("dataSavedInLS", JSON.stringify(taskArr));
    displayArr(taskArr);
  }
}
