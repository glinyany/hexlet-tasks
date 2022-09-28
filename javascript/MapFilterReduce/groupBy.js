/* reduce() practice */

function groupBy(group, key) {
  const handler = (acc, student) => {
    if (!Object.hasOwn(acc, student[key])) {
      acc[student[key]] = [];
    }
    acc[student[key]].push(student);
    return acc;
  }
  const groupByKey = group.reduce(handler, {});
  return groupByKey;
}

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];
 
console.log(groupBy([], '')); // {}
console.log(groupBy(students, 'mark'));
console.log(groupBy(students, 'class'));
console.log(groupBy(students, 'name'));
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }