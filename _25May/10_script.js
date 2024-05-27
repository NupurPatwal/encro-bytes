// Discount Calculator
// Write a program that takes the original price of an item and the discount percentage as input, then calculates and prints out the discounted price.


const ori_Price= prompt("Enter the price");
const discount =prompt("Enter the discount percentage.");
const discount_price= (ori_Price * discount)/100;
console.log(discount_price);
alert("The discounted price is "+ discount_price);
