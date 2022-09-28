/* using spread-operator to merge data and return new obj */

function make(name, objectData) {
  const company = { name , ...objectData ,state: 'moderating', createdAt: Date.now() };
	return company;
}

const company = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }
 
const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }

console.log(company2);