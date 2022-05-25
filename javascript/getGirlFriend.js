import _ from 'lodash';
/* map(), filter() practice */
function getGirlFriends(users) {
  const friends = users.map(({friends}) => friends);
  const flattedFriends = friends.flat();
  const girls = flattedFriends.filter(({gender}) => gender === 'female');
  return girls;
}


const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];
 
console.log(getGirlFriends(users));
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];