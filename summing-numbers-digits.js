// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// My Solution
function sumDigits(number) {
  let sum = 0;
  let sNumberArray = Math.abs(number)
    .toString()
    .split("");
  sNumberArray.forEach(function(digit) {
    sum += parseInt(digit);
  });
  return sum;
}

console.log(sumDigits(-24));

// Voted Best Practice
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce(function(a, b) {
      return +a + +b;
    }, 0);
}
