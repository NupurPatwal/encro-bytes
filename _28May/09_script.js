// Discount Calculator
// Write a program that takes the original price of an item and the discount percentage as input, then calculates and prints out the discounted price.
function discount_P(a,b) {
    const org_Price= a;
    const discount =b;
const discount_price= (org_Price * discount)/100;
console.log(discount_price);
alert("The discounted price is "+ discount_price);
}
discount_P(100,50);