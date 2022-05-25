import _ from 'lodash';
/* my own realisation of _.cloneDeep from lodash (task 10 hexlet js:objects) */

function cloneDeep(obj) {
	const clonedObject = {};

	for (const [key, value] of Object.entries(obj)) {
		console.log(`${key}: ${value}`);
		if (_.isObject(value)) { // use recursion!
			clonedObject[key] = cloneDeep(value);
			continue;
		}
		clonedObject[key] = value;
	}
	console.log(clonedObject);
	return clonedObject;
}

const data = {
    key: 'value',
    key2: {
      key: 'innerValue',
      innerKey: {
        anotherKey: 'anotherValue',
    },
   },
};

const result = cloneDeep(data); // Но внутри другие объекты
console.log(result.key2 !== data.key2); // true
console.log(result.key2.innerKey !== data.key2.innerKey); // true
