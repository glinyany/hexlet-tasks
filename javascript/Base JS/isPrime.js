// @ts-check
/* eslint-disable no-console */

// BEGIN (write your solution here)
const yes = 'yes';
const no = 'no';

const isPrime = (integer) => {
  if (integer < 2) return false;
  for (let i = 2; i <= integer / 2; i += 1) {
    if (integer % i == 0) {
      return false;
    }
  }
  return true;
}

function sayPrimeOrNot(integer) {
  (isPrime(integer)) ? console.log(yes) : console.log(no);
}

// END

console.log(sayPrimeOrNot(2));
console.log(sayPrimeOrNot(3));
console.log(sayPrimeOrNot(19));
console.log(sayPrimeOrNot(23));
console.log(`---------------`);
console.log(sayPrimeOrNot(49));
console.log(sayPrimeOrNot(8));
console.log(sayPrimeOrNot(4));
console.log(sayPrimeOrNot(1));
console.log(sayPrimeOrNot(0));

