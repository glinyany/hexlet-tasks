const getMax = (numbers) => {
    let [max, ...rest] = numbers;

    for (i = 0; i < rest.length; i++) {
        if (max < rest[i]) {
            max = rest[i]
        }
    }
    return max;
};

console.log(getMax([1, 10, 8]));