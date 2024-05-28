const a = Number(prompt("Enter first side"));
const b = Number(prompt("Enter second side"));
const c = Number(prompt("Enter third side"));


function triangle(a,b,c) {
    if (a + b > c && b + c > a && c + a > b) {
        console.log("This Triangle is possible.");
        if (a == b && b == c && c == a) {
          console.log("Equilateral Triangle.");
        } else if (a == b || b == c || c == a) {
          console.log("Isosceles triangle");
        } 
        else {
          console.log("Scalene triangle");
        }
      } else {
        console.log("Triangle not possible");
      }
}

triangle(a,b,c);