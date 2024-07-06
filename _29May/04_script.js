// Factorial Calculation

// Write a function factorial that takes a number as an argument and returns the factorial of that number using a for loop.
const fact= prompt("enter num")
function factorial(num) {
    let factorial = 1;
    if (num==0) {
        return 1;
    }
    for(let i=1; i<=num;i++){

        factorial = factorial * i;
    }
    return factorial;
}

// n!=n * n-1 * n-2
// 0! =1

console.log(factorial(fact));
