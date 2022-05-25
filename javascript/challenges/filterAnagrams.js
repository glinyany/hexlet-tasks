const filterAnagrams = (key, array) => {
  const result = []
  const filtered = array.filter(obj => {
    if (obj.split('').sort().join('') === key.split('').sort().join('')) {
      result.push(obj);
      return true;
    }
    return false;
  });
  return filtered;
};


console.log(`!!!`,filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']
console.log(`!!!`,filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// // ['carer', 'racer']
 console.log(`!!!`, filterAnagrams('laser', ['lazing', 'lazy',  'lacer']));
// // []
