import _ from 'lodash';
/* js objects merge task (task 9 hexlet js:objects) */

function fill(mainObject, allowedProps, secondObject) {
    const allowedObject = _.pick(secondObject, allowedProps);
    (allowedProps.length === 0) ? Object.assign(mainObject, secondObject) : Object.assign(mainObject, allowedObject);
    
    return mainObject;
}

const company = {
    name: null,
    state: 'moderating',
};
  
const data = {
    name: 'Hexlet',
    state: 'published',  
};

console.log(fill(company, [], data));
console.log(fill(company, ['name'], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }