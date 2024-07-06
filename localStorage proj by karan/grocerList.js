const taskList = document.getElementById("taskList");
const txtinp = document.getElementById("txtinp");
const btn = document.getElementById("btn");
const taskArr = [];

// CREATE
btn.addEventListener("click", function () {
  if (localStorage.getItem("data")) {
    const dataArr = JSON.parse(localStorage.getItem("data")); // Parse converts the data to original data type, doesn't matter whether data is in array form or any other form
    dataArr.push(txtinp.value);
    localStorage.setItem("data", JSON.stringify(dataArr));
    displayArr(dataArr);
  } else {
    taskArr.push(txtinp.value);
    localStorage.setItem("data", JSON.stringify(taskArr));
    displayArr(taskArr);
  }
  txtinp.value = ""; // Clear the input field after adding
});

// READ
function displayArr(arr) {
  taskList.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    taskList.innerHTML += `
      <li>
        <span>${i + 1} ${arr[i]}</span>
        <div>
          <button onclick="updateItem(${i})" class="bg-yellow-500 text-white px-2 py-1 rounded-lg mr-2 hover:bg-yellow-600">
            Update
          </button>
          <button onclick="deleteItem(${i})" class="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600">
            Delete
          </button>
        </div>
      </li>`;
  }
}

// UPDATE
function updateItem(i) {
  let updateVal = prompt("Enter the updated value...");
  const dataArr = JSON.parse(localStorage.getItem("data"));
  dataArr.splice(i, 1, updateVal);
  localStorage.setItem("data", JSON.stringify(dataArr));
  displayArr(dataArr);
}

// DELETE
function deleteItem(i) {
  let isDelete = confirm("Do You Really Want To Delete Item?");
  const dataArr = JSON.parse(localStorage.getItem("data"));
  if (isDelete == true) {
    dataArr.splice(i, 1);
  }
  localStorage.setItem("data", JSON.stringify(dataArr));
  displayArr(dataArr);
}

// Function to display when window loads
window.addEventListener("load", function () {
  const dataArr = JSON.parse(localStorage.getItem("data")) || [];
  console.log(dataArr);
  displayArr(dataArr);
});

/*const taskList = document.getElementById("taskList");
const txtkinp = document.getElementById("taskinp");
const btn = document.getElementById("btn");
const taskArr = [];

// CREATE;
btn.addEventListener("click", function () {
  if (localStorage.getItem("data")) {
    const dataArr = JSON.parse(localStorage.getItem("data")); //parse converts the data to original data type , doesnt matter whther data isin array for or any other form
    dataArr.push(txtinp.value);
    localStorage.setItem("data", JSON.stringify(dataArr));
    displayArr(dataArr);
  } else {
    taskArr.push(txtinp.value);
    localStorage.setItem("data", JSON.stringify(taskArr));
    displayArr(taskArr);
  }
});
// READ
function displayArr(arr) {
  taskList.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    taskList.innerHTML += `<li>${arr[i]} 
    // <button onclick="updateItem(${i})">Update</button>
    // <button onclick="deleteItem(${i})">Delete</button>
    // </li>`;
    <span>
      ${i + 1} ${arr[i]}
      <div>
        <button
          onclick="updateItem(${i})"
          class="bg-yellow-500 text-white px-2 py-1 rounded-lg mr-2 hover:bg-yellow-600">
          Update
        </button>
        <button
          onclick="deleteItem(${i})"
          class="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </span>;
  }
}

// UPDATE
function updateItem(i) {
  let updateVal = prompt("Enter the updated value...");
  const dataArr = JSON.parse(localStorage.getItem("data"));
  dataArr.splice(i, 1, updateVal);
  localStorage.setItem("data", JSON.stringify(dataArr));
  displayArr(dataArr);
}

// DELETE
function deleteItem(i) {
  let isDelete = confirm("Do You Really Want To Delete Item?");
  const dataArr = JSON.parse(localStorage.getItem("data"));
  if (isDelete == true) {
    dataArr.splice(i, 1);
  }
  localStorage.setItem("data", JSON.stringify(dataArr));
  displayArr(dataArr);
}

// Function to display when window called

window.addEventListener("load", function () {
  const dataArr = JSON.parse(localStorage.getItem("data"));
  console.log(dataArr);
  displayArr(dataArr);
}); 
*/
