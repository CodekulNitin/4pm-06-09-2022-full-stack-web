// // for loop
// // const n = 5;
// // for (let i = 1; i <= n; i++) {
// //   console.log(i);
// // }

// // assignment

// // javascript program to generate a random numbers between two numbers
// // guess random number
// // generate random string

// //end

// // while loop
// // let i=1;
// // let n=5;
// // while(i<= n){
// //     console.log(i);
// //     i += 1;
// // }

// // break statment
// // for(let i =1; i<=5;i++){
// //     if( i == 2){
// //         break
// //     }
// //     console.log(i);
// // }

// //break statment using while loop
// // let sum = 0,number;
// // while(true){
// //  let   number=parseInt(prompt("enter a number"))
// //     //break condition
// //     if(number<0){
// //         break
// //     }
// //     sum +=number
// // }
// // console.log(`the sum is ${sum}`);

// // nested for loop
// // for (let i =1;  i<=3; i++){
// //     for(let j=1; j<=3; j++){
// //         if(i == 2 ){
// //             break
// //         }

// //         console.log(`i = ${i},j = ${j}`);
// //     }
// // }

// // output
// // i=1 j=1
// // i=1 j=2
// // i=1 j=3
// // i=3 j=1
// // i=3 j=2

// // switch
// // switch ((variable, expression)) {
// //   case value1:
// //     //body
// //     break;
// //   case value2:
// //     break;
// // }
// let a=2;

// // switch (a) {
// //     case 1:
// //         a="one"
// //         break;
// //     case 2:
// //         a = "two"
// //         break
// //     default:
// //         a = " not found"
// //         break;
// // }
// // console.log(`the value is ${a}`);

// //  calculte the sum of possitive numbers

// // enter a number 1;
// // enter a number 2
// // enter number hello
// // you entered a String
// // enter number 5
// // enter number -2
// // the sum is 8

// let sum = 0;
// let number = 0;

// while(number >= 0){
//     // add all positive numbers
//     sum += number;
//     // take input from the user
//     number = parseInt(prompt('enter a number'))
//     // ccontinue condition
//     if(isNaN(number)){
//         console.log("you enterd a string");
//         number =0; //the value of number is made 0
//         continue;
//     }
// }
// console.log(`the sum is ${sum}`);

const arr = [5, -5, -3, -7, -9, 1, 2, 3];
const sumPositive = (arr = []) => {
  const isPossitive = (num) => typeof num === "number" && num > 0;
  const res = arr.reduce((acc, val) => {
    if (isPossitive(val)) {
      acc += val;
    }
    return acc;
  }, 0);
  return res;
};
console.log(sumPositive(arr));

// Write a program that takes as input an array of numbers of length N and a number p (positions - p is greater than 0 and less than N) and a number d (direction - either 0 for left or 1 for right). The objective is to return the array shifted by p positions in d direction.

//Example: For an input array [1, 3, 2, 7, 4, 6] with p=3 and d=0 the expected result would be [7, 4, 6, 1, 3, 2] with the array shifted left by 3 positions.


