import _ from 'lodash';

function takeOldest(users, returnQuantity = 1) {
  const result = [];
  const sorted = _.sortBy(users, [function(obj) { return Date.parse(obj.birthday) }]);
  for (let i = 0; i < returnQuantity; i += 1) result.push(sorted[i]);

  return result;
}

const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(users, takeOldest(users, 3))