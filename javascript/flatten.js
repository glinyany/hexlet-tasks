

const flatten = (array) => {
    if (!array.length) { return []; }

    let result = [];
    for (const item of array) {
        if (Array.isArray(item)) {
            console.log(`Item is an Array -`, item);
            result = [...result, ...item];
            continue;
        }
        result.push(item);

    }
    return result;
};

console.log(flatten([1, [3, 2], 9]));