// Even or Odd

// Write a function isEven that takes a number as an argument and returns true if the number is even and false if the number is odd. Use conditionals within the function.

const num= prompt("enter the num")
function isEven(num) {
    if (num%2==0) {
        console.log("even number");
        return true;
    }else{
        console.log("odd number");
        return false;
    }
}
console.log(isEven(num));