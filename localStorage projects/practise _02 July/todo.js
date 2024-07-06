// 1. passing the ref of todolists of lno. 15 here.(pass kro value ko)
let todolists = document.querySelector(".todolists");
// 2. ref of lno. 12
let todoValue = document.querySelector(".todoValue");
// 3. ref of btn
let btn = document.querySelector(".btn");
// 14. get kro or store kro.
let todoarr = [];

//  15. get todolist item.
let gettodoListitemLS = (anyvalueFruit) => {
  return JSON.parse(localStorage.getItem("todofruit"));
};
// 6. defing the function of line no. 12js
//  its work: jb bhi koi btn pe click krta ha toh to print stt. call hoti h
//  form hamare page ko render rti hai to somewhere else. TO prevent such type of behaviour we use event

// 12. defining the second function:
let addTodoListLocalStorage = (anyvalueFruit) => {
  return localStorage.setItem("todofruit", JSON.stringify(anyvalueFruit));
  // 13. setting the item.
  // data hamesa string formate m hona chaiye.
};

let addTodoList = (event) => {
  event.preventDefault();

  // 11. calling a function:
  addTodoListLocalStorage(todoValue.value); // yaha pe data get kr rahe hai.
  // console.log("this is todo");
  //7. GET the element:

  let liElement = document.createElement("li"); // creating li
  liElement.innerHTML = todoValue.value; // inserting the value. // we have to add this data in LS

  //  8. to append the value in empty div 15 ---> step 1
  //  9. to add append child in the form of list ---> step 2
  // 10. add the data in the local storage. previous 4 lines.

  console.log(todolists);
  todolists.append(liElement); // add to parent.
};

//  4. adding event listner to the button:
btn.addEventListener("click", (event) => {
  //  5. Calling a function named addTodoList:

  addTodoList(event);
});
