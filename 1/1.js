const splitBill = (amount, numPeople) =>
  `Each person needs to pay ${(amount / numPeople).toFixed(2)} `;

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
console.log(splitBill(10, 3));

//stretch goal start

// function countdown(startingNumber, step) {
//   let countFromNum = startingNumber + step;
// //   return function decrease() {
// //     countFromNum -= step;
// //     return countFromNum;
// //   };
// return ()=>countFromNum -= step;    
//}

const countdown = (startingNumber, step) =>{
  let countFromNum = startingNumber + step;
  return ()=>countFromNum -= step;  

} 

const countingDown = countdown(20, 2);

// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());

let result = []
for (let index = 0; index <= 20/2; index++) {
   result.push(countingDown());    
}
console.log(result.join(","))
