// Number Comparison

// Write a program that takes two numbers as input and prints out which one is larger, or if they are equal.


const first_num = prompt("Enter first number");
const sec_num = prompt("Enter second number");
function num_Comparison(first_num,sec_num) {
    if (first_num > sec_num) {
        console.log("First number is larger");
        alert("First number is larger.")
    } else if (sec_num > first_num) {
        console.log("Second number is larger.");
        alert("Second number is larger.");
    }
    else {
        console.log("Numbers are equal.");
        alert("Numbers are equal.");
    }
    
}

num_Comparison(first_num,sec_num);