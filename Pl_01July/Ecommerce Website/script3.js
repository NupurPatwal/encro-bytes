// const num = [2, 3, 4, 5, 50, 32, 45, 67, 43, 22, 32, 20];

// const newArr = num.filter((elem) => {
//   return elem < 25;
// });
// console.log(newArr);

// let num1 = [5, 10, 13, 14, 17, 20, 25, 30, 155, 177];
// let newArrr = num1.filter((e) => {
//   return e % 5 == 0;
// });
// console.log(newArrr);

let num2 = [
  "bravo",
  "alpha",
  "charlie",
  "gamma",
  "delta",
  "theta",
  "echo",
  "foxtrot",
  "golf",
  "aeiou",
  "uoeia",
];
let nameArr = num2.filter((e) => {
  return (
    e.includes("a") &&
    e.includes("e") &&
    e.includes("i") &&
    e.includes("o") &&
    e.includes("u")
  );
});
console.log(nameArr);
