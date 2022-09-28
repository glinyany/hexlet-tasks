/* function that input users list, get names, sort them, and return  */

function getSortedNames(listOfUsers) {
  const users = [];
  for (const user of listOfUsers) {
    const { name } = user;
    users.push(name);
  }
  users.sort();
  return users;
}

const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  ];
   
console.log(getSortedNames(users)); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
  