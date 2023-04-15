// /*
//   loops - executing a block of code over and over again
//   -for loop
//     -a for loop contains three major parts:
//       -initial value
//       -condition
//         - creating the appropriate condition/expression
//       -itiration <finalExpression>
//         -decrementation or incrementation based on the condition stated
//
//       syntax:
//         for(initialization;expression//condition; iteration <finalExpression> (++/--){
//           block of code
//       }
//
//   -while loop
//   -do while
//   -for in loop
//
// */
//
// for (let i=0; i<=10; i++){
//   console.log(i);
// };
//
// // each item is ordered per index
// let btsBoyGroup = ['Jimin','Jungkook','Jin','V','JHope','Suga','RM']
//
// //we access the items in an array by accessing them through their index
// console.log(btsBoyGroup);
// console.log(btsBoyGroup[3]);
// console.log(btsBoyGroup[0]);
// console.log(btsBoyGroup.length); //7
// console.log(btsBoyGroup[btsBoyGroup.length-1]);
//
//
// for (let index=0; index < btsBoyGroup.length; index++){
//   console.log(btsBoyGroup[index]);
// }
//
// // while (true) {
// //   console.log('this is an infinite loop');
// // }
//
// let x = 1;
// while(x <= 5){
//   console.log(x);
//   x++;
// }
//
// let counter = 1
// do {
//   console.log(counter);
//   counter++;
// }while (counter <= 5)
//
// //for in loop
// let colors = [ 'red', 'purple', 'orange']
//
// for (let num1 = 0; num1 <= colors.length-1; num1++){
//   console.log(colors[num1]);
// }
//
// for(let num1 in colors){
//   console.log(colors[num1]);
// }
//
// let person = {
//   name: 'Jungkook',
//   age: 26,
//   country: 'South Korea'
// };
//
// for (let property in person){
//   console.log(`This person is ${person.name} with the age of ${person.age} and living in ${person.country}.`);
// }
//
// for(let i=1; i <= 10; i++){
//   console.log(i);
//   if (i == 5){
//     break;
//   }
// }
// for(let i=1; i <= 10; i++){
//   console.log(i);
//   if (i == 5){
//     break;
//   }
// }

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;
rl.question("Enter a positive integer greater:", (answer) => {
  input = parseInt(answer);
  rl.close();


  if (isNaN(input) || input <= 0) {
    console.log("Invalid input. Please enter a positive integer greater than zero.");
  } else {

    let fibNum1 = 0;
    let fibNum2 = 1;
    let nextFibNum;
    while (fibNum2 < input) {
      nextFib = fibNum1 + fibNum2;
      fibNum1 = fibNum2;
      fibNum2 = nextFibNum;
    }

    if (fibNum2 === input) {
      console.log(input + " is a Fibonacci number.");
    } else {
      console.log(input + " is not a Fibonacci number.");
    }
  }
});
