function add(num1, num2) {
  return num1 + num2;
}

const total = add(15, 17);
console.log(total);

// default////

function result(sum1, sum2 = 10) {
  return sum1 + sum2;
}

const sum = result(15);
console.log(sum);
