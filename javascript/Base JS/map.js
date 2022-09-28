import _ from 'lodash';
import crc32 from 'crc-32';
/* Implement a set of functions to work with a dictionary built on a hash table. */

function make() {
  const internal = [];
  return internal;
}

function collisionCheck(index1, index2) {
  const first = indexGenerator(index1);
  const second = indexGenerator(index2);
  if (first === second) {
    return true;
  }
  return false;
}

function indexGenerator(key) {
  const hash = crc32.str(key);
  const index = Math.abs(hash) % 1000;
  return index;
}

function set(map, key, value) {
  const index = indexGenerator(key);
  if (!map[index] || collisionCheck(key, map[index][0]) === false) {
    map[index] = [key, value];
    return true;
  } else {
    if (key === map[index][0] && value !== map[index][1]) {
      map[index] = [key, value];
    }
  }
  return false;
}

function get(map, key, defaultValue = null) {
  const index = indexGenerator(key);

  if (!map.hasOwnProperty(index)) return defaultValue;
  const [existingKey, value] = map[index];
  if (existingKey !== key) return defaultValue;

  return value;
}

const map = make();
let result;

result = get(map, 'key');
console.log(result); // => null
console.log('___________');

result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"
console.log('___________');

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"
console.log('___________');

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"
console.log('___________');

set(map, 'key2', 'another value');
const result5 = get(map, 'key2');
console.log(result5);
console.log('___________');

const result2 = get(map, 'aaaaa0.0585754039730588');
console.log(result2);
console.log(`test map colision =====`)

const map2 = make();

set(map2, 'aaaaa0.462031558722291', 'vvv');
set(map2, 'aaaaa0.0585754039730588', 'boom!');

const res1 = get(map2, 'aaaaa0.462031558722291'); // vvv
console.log(res1);
const res2 = get(map2, 'aaaaa0.0585754039730588'); // null
console.log(``,res2);