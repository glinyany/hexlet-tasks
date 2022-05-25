// @ts-check

// BEGIN (write your solution here)
const func = (numbers, num) => {
  if (numbers.length === 0) {
    return null;
  }

  const diffs = numbers.map((element) => Math.abs(num - element));
  console.log(`1:`, diffs)
  return diffs.reduce((index, diff, currentIndex) => (
    diff < diffs[index] ? currentIndex : index
  ), 0);
};

console.log(func([15, 10, 3, 4], 0));  // 2
// END