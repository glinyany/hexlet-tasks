import _ from 'lodash';
/* my realisation of lodash get() func */
function get(data, keys) {
	let obj = data;
  console.log(`props - ${keys}`);
    
  for (const key of keys){
		if (!Object.hasOwn(obj, key)) return null;
		if (_.isObject(key)) {
			return get(obj, key);
		}
		obj = obj[key];
  }
  return obj;
}
  
const data = {
    user: 'ubuntu',
    hosts: {
      0: { name: 'web1', },
      1: { name: 'web2', null: 3, active: false, },
    },
};
  
console.log(get(data, ['undefined'])); // null
console.log(get(data, ['user'])); // 'ubuntu'
console.log(get(data, ['user', 'ubuntu'])); // null
console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log(get(data, ['hosts', 1, null])); // 3
console.log(get(data, ['hosts', 1, 'active'])); // false

