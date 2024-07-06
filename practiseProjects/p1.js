const category = document.getElementById("categoryVal");
const title = document.getElementById("titleVal");
const description = document.getElementById("description");
const contentBox = document.querySelector("#contentBox");
let btn = document.getElementById("btn");
const arr = [];

window.addEventListener("load", () => {
  const contentArr = JSON.parse(localStorage.getItem("blogData"));
  console.log(contentArr);
  if (contentArr) {
    displayContent(contentArr);
  }
});

/* local storage, objects, array */
btn.addEventListener("click", () => {
  console.log(category.value);
  const merger = {
    inpCategory: category.value,
    inpTitle: title.value,
    inpDescription: description.value,
  };
  if (localStorage.getItem("blogData")) {
    const blogData = JSON.parse(localStorage.getItem("blogData"));
    blogData.push(merger);
    localStorage.setItem("blogData", JSON.stringify(blogData));
    displayContent(blogData);
  } else {
    arr.push(merger);
    localStorage.setItem("blogData", JSON.stringify(arr));
    displayContent(arr);
  }
});

function displayContent(allContent) {
  contentBox.innerHTML = "";
  if (allContent) {
    for (let i = 0; i < allContent.length; i++) {
      contentBox.innerHTML += `
        <p>The category of blog is: ${allContent[i].inpCategory}</p>
        <p>The title of the blog is: ${allContent[i].inpTitle}</p>
        <p>The description of the blog is as follows: ${allContent[i].inpDescription}</p>
      `;
    }
  }
}
