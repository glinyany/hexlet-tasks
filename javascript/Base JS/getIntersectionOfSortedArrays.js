const getIntersectionOfSortedArrays = (firstArr, secondArr) => {
    console.log(firstArr,secondArr);
    const result = [];
    for (const item of firstArr) {
        if (secondArr.includes(item) && !result.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

console.log(getIntersectionOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3])); // [10, 24]
