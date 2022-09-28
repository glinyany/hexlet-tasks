const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
};
const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];
const locations2 = [
    ['Hotel', [7, 3]],
    ['Square', [5, 6]],
  ];

const currentPoint = [5, 5];

// BEGIN (write your solution here)
const getTheNearestLocation = (locations, currentPoint) => {
    console.log(locations);
    if (!locations.length) {
        return null;
    }
    let closestOne = -1;
    const [x2,y2] = currentPoint;
    let result = '';
    for (const location of locations) {
        console.log(`старт:` , closestOne, result, `проверка для `, location);
        const [, [x1,y1]] = location;
        let distance = getDistance([x1,y1], [x2,y2]);
        if (closestOne === -1 || distance < closestOne) {
            console.log(distance, closestOne);
            closestOne = distance;
            result = location;
        } 
    }
    return result;
};
// END
  
// Если мест нет, то возвращается null

console.log(getTheNearestLocation(locations,currentPoint));
//console.log(getTheNearestLocation([],currentPoint));