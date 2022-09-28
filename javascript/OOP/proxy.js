/* 
function that get an object and allows to return only @public properties/methods. 
if u try to read or rewrite @private or nonexisting prop, throws exception.
*/

const protect = (course) => {
  const handlers = {
    get: (target, prop) => {
      if (prop in target) {
        if (prop.includes('_')) {
          throw new Error('Error');
        } else {
          if (typeof target[prop] === 'string') return target[prop];
          if (typeof target[prop] === 'function') return target[prop].bind(course);
          return target[prop];
        }
      }
      throw new Error('Error');
    },
    set: (target, prop, value) => {
      if (prop in target) {
        if (prop.includes('_')) {
          throw new Error('Error');
        } else {
          return target[prop] = value;
        }
      }
      throw new Error('Error');
    },
  };

  return new Proxy(course, handlers);
}

export default protect;

/* 

class Course {
  constructor(name) {
    this._name = name;
  }
 
  getName() {
    return this._name;
  }
}
 
const course = new Course('Object-oriented design');
const protectedCourse = protect(course);
 
course.getName(); // "Object-oriented design"
protectedCourse.getName(); // "Object-oriented design"
course._name; // "Object-oriented design"
course._nonExists; // undefined
 
protectedCourse._name; // Error
protectedCourse._name = 'OOD'; // Error
protectedCourse._nonExists; // Error

*/