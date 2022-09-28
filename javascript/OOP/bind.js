import _ from 'lodash';

const obj = { number: 5 };

const func = function func(number) {
  console.log(arguments)
  return number + this.number;
};
const funcWithContext = bind(func, obj);
// Принимает столько же аргументов сколько и исходная функция
console.log(funcWithContext(4));
// es6

function bind(func, context) {
  return (...args) => {
    return func.apply(context, args);
  } 
}

// console.log(bind(func, obj)(3))
// console.log(bind(func, obj, 3)())
// console.log(bind(func, obj, 3)(3))
// console.log(obj)

// function bind(func, context, ...rest) {
//   return func.bind(context, ...rest)
// }

// function bind(func, context, ...args) {
//   return function(...rest) {
//     const uniqID = Date.now().toString(); // cоздание уникального ключа в обьекте obj
//     context[uniqID] = func; // привязывание функции func к ключу в обьекте
//     const result = context[uniqID](...args.concat(rest)); // вызов функции из обьекта obj, уник. ключа с рест оп.
//     delete context[uniqID]; // удаление ключа чтобы не мутировать обьект
//     return result;
//   }
// }
// es5

// function bind(func, context) {
//   const rest = Array.prototype.slice.call(arguments, 2);
//   return () => {
//     const args = Array.prototype.slice.call(arguments);
//     return func.apply(context, rest.concat(args))
//   }
// }

