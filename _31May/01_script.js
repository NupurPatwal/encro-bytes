// const arr = [1,2,3,4,5,6,7,8,9,10];
// function checkEven(arr){
//     let evenArr = []
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i]%2==0){
//             evenArr.push(arr[i]) //[2,4]
//         }
//     }
//     return evenArr;
// }

// console.log(checkEven(arr))

// Sort
// const arr = [54, 1, 2, 34, 41, 32, 320, 29, 100];

// function maxElem(arr) {
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] < arr[index + 1]) {
//         max = arr[index + 1];
//         console.log(max,"1");
//     } else if (arr[index] > arr[index + 1]) {
//         max = arr[index];
//         console.log(max,"2")
//     } else if(index==arr.length-1) {
//       return max;
//     }
//   }
// }
// console.log(maxElem(arr));

const names = ["Nupur", "Priya", "Riya", "Imli"];

function sortName(str) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i] === str) {
        // console.log(names[i])
      arr.push(names[i]);
    }
  }
  return arr;
}

console.log(sortName("Priya"))
