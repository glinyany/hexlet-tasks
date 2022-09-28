import _ from 'lodash';

const fill = (array, value, start = 0, end = array.length) => {
  console.log(start,end)
  if (end > array.length) { 
    return array.fill(value);
  }
  array.fill(value, start, end);
  return array;
};


console.log(fill([1, 2, 3, 4], '*', 1, 3)); // => [1, '*', '*', 4]

console.log(fill([1, 2, 3, 4], '*')); // => ['*', '*', '*', '*']
 
console.log(fill([1, 2, 3, 4], '*', 4)); // => [1, 2, 3, 4]
 
console.log(fill([1, 2, 3, 4], '*', 0, 10)); // => ['*', '*', '*', '*']
