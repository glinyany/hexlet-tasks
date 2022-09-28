/*
В этой практике вам предстоит поработать с односвязным списком. Для лучшего понимания задачи, прочитайте литературу данную в подсказках и изучите исходники файла Node.js, внутри которого находится реализация односвязного списка. И посмотрите тесты, там видно как список создается и используется.

linkedList.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход односвязный список и переворачивает его.

Примеры
import Node from './Node';
import reverse from './linkedList';
 
const numbers = new Node(1, new Node(2, new Node(3))); // (1, 2, 3)
const reversedNumbers = reverse(numbers); // (3, 2, 1)

 */
// mine solution
class Node {
  constructor(value, node = null) {
    this.next = node;
    this.value = value;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}

// BEGIN (write your solution here)
export default (numbers) => {
  const result = [];

  const extractValues = (numbers) => {
    const nextNode = numbers.next;
    const value = numbers.value;
    result.push(value);

    if (nextNode !== null) extractValues(nextNode);

    return;
  }
  extractValues(numbers);

  let node;
  for (let i = 0; i < result.length; i++) {
    if (i === 0) {
      node = new Node(result[i]);
    } else {

      node = new Node(result[i], node)
    }
  };

  return node;
};

// END

//   const numbers = new Node(1, new Node(2, new Node(3)));
//   const list = new Node(true, null);


/**
Teachers solution
// BEGIN
const reverse = (list) => {
  let reversedList = null;
  let current = list;

  while (current) {
    reversedList = new Node(current.getValue(), reversedList);
    current = current.getNext();
  }

  return reversedList;
};

export default reverse;
// END
*/