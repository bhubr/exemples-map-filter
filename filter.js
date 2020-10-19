// Exemples de filter

const numbers = [-4, 0, 5, -2, 9, 12];

function isPositive(number) {
  if (number >= 0) return true;
  else return false;
}

function isPositiveAndEven(number) {
  const isEven = number % 2 === 0;
  if (number >= 0 && isEven) return true;
  else return false;
}

const positiveNumbers = numbers.filter(isPositive);
console.log(positiveNumbers);

const positiveEvenNumbers = numbers.filter(isPositiveAndEven);
console.log(positiveEvenNumbers);