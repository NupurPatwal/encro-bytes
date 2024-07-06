const txt = document.getElementById("txt");
const nmb = document.getElementById("nmb");
const btn = document.getElementById("btn");
const ans = document.getElementById("ans");
const Array = [];

// Reload problem solution
window.addEventListener("load", () => {
  const parsedArr = JSON.parse(localStorage.getItem("contacts"));
  displayContacts(parsedArr);
});

// CREATE
btn.addEventListener("click", () => {
  const obj = {
    contactname: txt.value,
    contactnum: nmb.value,
  };

  if (localStorage.getItem("contacts")) {
    //Saving data in localstorage
    const parsedArr = JSON.parse(localStorage.getItem("contacts"));
    parsedArr.push(obj);
    localStorage.setItem("contacts", JSON.stringify(parsedArr));
    displayContacts(parsedArr);
  } else {
    Array.push(obj);
    localStorage.setItem("contacts", JSON.stringify(Array));
    displayContacts(Array);
  }
});

// READ
function displayContacts(contact) {
  ans.innerHTML = "";
  for (let i = 0; i < contact.length; i++) {
    ans.innerHTML += `<div>
        Name:${contact[i].contactname},Contact Number:${contact[i].contactnum}
        <button onclick="updateToDo(${i})">Update</button> 
        </div>`; // onclick applied because to get the updated function on every array element displayed in the div.
  }
}

function updateToDo(val) {
  let updatedName = prompt("Enter the task..");
  let updatedNumber = prompt("Enter the task..");
  const obj = {
    contactname: updatedName,
    contactnum: updatedNumber,
  };
  const parsedArr = JSON.parse(localStorage.getItem("contacts"));
  parsedArr.splice(val, 1, obj);
  localStorage.setItem("contacts", JSON.stringify(parsedArr));

  displayContacts(parsedArr);
}
