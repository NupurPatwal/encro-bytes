/*Number Sign Checker

Write a program that takes a number as input and prints out whether it's positive, negative, or zero. */


const num=prompt("Enter the number");

function number(num) {
    if (num >0) {
        console.log("POSITIVE");
    }else if(num<0){
        console.log("NEGATIVE");
    }else{
        console.log("ZERO");
    }
}


number(num);
