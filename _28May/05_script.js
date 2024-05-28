/*Number Oddity Checker

Write a program that takes a number as input and prints out whether it's even or odd.
Triangle Type Identifier */

const num=prompt("Enter the number");
function number(params) {
    if (num%2 == 0) {
        console.log("EVEN");
    } else {
        console.log("ODD");
    }
}

number(num);