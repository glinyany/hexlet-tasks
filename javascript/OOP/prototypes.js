function Company(name) {
  this.name = name;
}

// Одно и то же, полученное разными способами
// Company.prototype === Object.getPrototypeOf(new Company())

// Добавляем свойство getName (делаем его методом)
Company.prototype.getName = function getName() {
  // this по-прежнему зависит от контекста, в котором вызывается
  return this.name;
}

const company = new Company('Hexlet');
// Свойство доступно!
console.log(company.getName()); // => Hexlet
console.log(company)