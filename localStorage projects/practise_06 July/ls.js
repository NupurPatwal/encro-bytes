// get all dom elements:

const taskList = document.getElementById("inp-List"); //empty div
const taskInput = document.getElementById("text-Inp"); // task input
const button = document.getElementById("btn"); // button.

//  intilisig the array:
let taskArr = [];
// window loading:
window.addEventListener("load", () => {
  taskArr = JSON.parse(localStorage.getItem("localstore")) || [];
  displayArr(taskArr);
});

// create:
button.addEventListener("click", () => {
  const newInput = taskInput.value.trim();
  if (newInput !== "") {
    taskArr.push(newInput);
    localStorage.setItem("localstore", JSON.stringify(taskArr));
    displayArr(taskArr);
    taskInput.value = "";
  } else {
    alert(`Bhai kuch toh type kr...`);
  }

  //   calling function:
});

// calling the display function:
function displayArr(taskArr) {
  taskList.innerHTML = "";
  for (let i = 0; i < taskArr.length; i++) {
    taskList.innerHTML += `<span>${i + 1}${taskArr[i]}</span>
    <div>
    <button onclick="updateStep(${i})">
    Update
    </button>
    <button onclick="deleteStep(${i})">
    Delete
    </button>
    </div>`;
  }
}

function updateStep(i) {
  let updateVal = prompt(`Please update the item...`);
  taskArr.splice(i, 1, updateVal);
  localStorage.setItem("localstore", JSON.stringify(taskArr));
  displayArr(taskArr);
}

// Delete step:
function deleteStep(i) {
  const deleteVal = confirm(`Did you wanna delete?`);
  if (deleteVal) {
    taskArr.splice(i, 1);
    localStorage.setItem("localstore", JSON.stringify(taskArr));
    displayArr(taskArr);
  }
}
