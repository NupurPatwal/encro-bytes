// Prime Number Check

// Write a function isPrime that takes a number as an argument and returns true if the number is a prime number and false otherwise. Use a for loop and conditionals to check the number.
 const num1=prompt("ENter the num")
function isPrime(num) {
    for(let i=2; i<=num;i++){
        if (num%i==0 && i!==num) {
            console.log(i)
            return false;
        }else{
            return true;
        }
    }
}
console.log(isPrime(num1));