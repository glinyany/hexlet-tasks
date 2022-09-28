const removeFirstLevel = (array) => {
  const result = array.filter((el) => Array.isArray(el));
  return result.flat();
};

const tree1 = [[5], 1, [3, 4]]; // Второй уровень тут: 5, 3, 4
console.log(removeFirstLevel(tree1)); // [5, 3, 4]
 
const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
console.log(removeFirstLevel(tree2)); // [3, 5, [4, 3], 2]
