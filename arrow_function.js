////////////// function declaration//////////
// function doubleIt(num) {
//   return num * 2;
// }

// const result = doubleIt(5);
// console.log(result);

////////////////////////////////

// const doubleIt = function (num) {
//   return num * 2;
// };

// const result = doubleIt(5);
// console.log(result);

////////Arrow Function//////
//////single parameter///////////
const doubleIt = (num) => num * 2;
const result = doubleIt(5);
console.log(result);
///////////multiple parameter////////////
const add = (x, y) => x + y;
const result1 = add(5, 10);
console.log(result1);
////////without parameter/////////
const give5 = () => 5;
const result3 = give5();
console.log(result3);
////////// multiline arrow function//////////
const multiLine = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

const result4 = multiLine(10, 5);
console.log(result4);
