const sameParity = (array) => {
  const parity = (number) => (number % 2 === 0) ? true : false;
  const filteredOdd = array.filter((number) => parity(number));
  const filteredEven = array.filter((number) => !parity(number));

  return parity(array[0]) ? filteredOdd : filteredEven;
};

console.log(sameParity([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
console.log(sameParity([2, 0, 1, -3, 10, -2]));
console.log(sameParity([4, 0, 1, -3, 10, -2]));
console.log(sameParity([]));
