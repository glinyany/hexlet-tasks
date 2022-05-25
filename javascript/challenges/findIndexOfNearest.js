const findIndexOfNearest = (array, key) => {
  if (array.length === 0) return null;
  let difference;
  let result = array[0];
  const filtered = array.filter((number) => {
    if (Math.abs(number - key) < result - key) {
      if (Math.abs(number - key) !== difference) {
        difference = number - key;
        result = number;
        return true;
      }
    }
    return false;
  });
  return array.indexOf(result);  
};

console.log(findIndexOfNearest([], 2));              // null
console.log(findIndexOfNearest([15, 10, 3, 4], 0));  // 2
console.log(findIndexOfNearest([7, 5, 3, 2], 4));    // 1
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4)); // 2