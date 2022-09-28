// BEGIN
const teachers = (data) => data
  .map(({ name, country }) => ({ city: name.toLowerCase(), country: country.toLowerCase() }))
  .map(({ city, country }) => ({ city: city.trim(), country: country.trim() }))
  .map(({ city, country }) => [country, city])
  .sort() // sort countries and cities
  .reduce((acc, [country, city]) => {
    const citiesAcc = acc[country] ?? [];
    const cities = citiesAcc.concat(city);
    const uniqueCities = new Set(cities);
    return { ...acc, [country]: [...uniqueCities] };
  }, {});
// END

// vs 

// BEGIN (write your solution here)
import _ from 'lodash';

function normalize(countries) { // My solution
  const res = {};
  const normalized = _.sortBy(countries.map(single => {
    const name = single.name.toLowerCase().replace(/\s/g, '');
    const country = single.country.toLowerCase().replace(/\s/g, '');
    return { name, country };
  }), 'name');

  const countriesOnly = normalized.map(el => el.country);
  new Set(countriesOnly.sort().forEach(function (value) {
      res[value] = [];
    })
  );
  normalized.map(single => {
    if (res[single.country].indexOf(single.name) === -1) {
      res[single.country].push(single.name);
    }
  })

  return res;
};
// END

// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }