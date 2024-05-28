// if else -> ghar -> car , 100km/h , brakeless , Accident , ghar -> Speed breaker -> Car 50km/h aur brakes, -> Car 100
// const isBreaker = true;
// const isHome = false;
// let speed = 100;
// if (isBreaker == false || isHome == true) {
//   speed = speed - 50;
//   console.log("Accident prevented , cause breaks applied! -> ", speed);
// } else {
//   console.log("Accident happened , cause did'nt had any break! -> ", speed);
// }
const marks = prompt("Enter the value of A..");
// const b = prompt("Enter the value of B...");
// let c;
// let operator = prompt("Enter the value of Operator...");
// if (operator == "+") {
//   c = Number(a) + Number(b);
//   console.log(c);
// } else if (operator == "-") {
//   c = a - b;
//   console.log(c);
// } else if (operator == "*") {
//   c = a * b;
//   console.log(c);
// } else if (operator == "/") {
//   c = a / b;
//   console.log(c);
// } else {
//   c = a % b;
//   console.log(c);
// }

if (marks > 95 && marks < 100) {
  alert("You Got 'A' Grade");
  alert(marks)
} else if (marks > 90 && marks < 95) {
  alert("You Got 'B' Grade");
}
else if(marks> 85 && marks <90){
    alert("You Got 'C' grade");
}
else if(marks> 80 && marks <85){
    alert("You Got 'D' grade");
}
else if(marks> 75 && marks <80){
    alert("You Got 'E' grade");
}
else if(marks> 70 && marks <75){
    alert("You Got 'F' grade");
}
else if(marks<70){
    alert("You are 'FAIL'");
}