// Exemples de filter

const numbers = [-4, 0, 5, -2, 9, 12];

function isPositive(number) {
  return number >= 0;
}

function isPositiveAndEven(number) {
  return number >= 0 && number % 2 === 0;
}

const positiveNumbers = numbers.filter(isPositive);
console.log(positiveNumbers);

const positiveEvenNumbers = numbers.filter(number => number >= 0 && number % 2 === 0);
console.log(positiveEvenNumbers);