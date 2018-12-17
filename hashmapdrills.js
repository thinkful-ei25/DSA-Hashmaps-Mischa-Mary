const HashMap = require('./hashmap');

let arr = [
  { Hobbit: 'Bilbo' },
  { Hobbit: 'Frodo' },
  { Wizard: 'Gandolf' },
  { Human: 'Aragon' },
  { Elf: 'Legolas' },
  { Maiar: 'The Necromancer' },
  { Maiar: 'Sauron' },
  { RingBearer: 'Gollum' },
  { LadyOfLight: 'Galadriel' },
  { HalfElven: 'Arwen' },
  { Ent: 'Treebeard' }
];

let smallArr = [
  { Hobbit: 'Frodo' },
  { Wizard: 'Gandolf' },
  { Human: 'Aragon' },
    {Human: 'Alex'}];
const lor = new HashMap();

// lor.MAX_LOAD_RATIO = 0.9;
// lor.SIZE_RATIO = 3;

// console.log(lor.MAX_LOAD_RATIO);

function setNewHashMap(hashMap, array) {
  for (let i = 0; i < array.length; i++) {
    let [key] = Object.keys(array[i]);
    let value = array[i][key];

    hashMap.set(key, value);
  }
  return hashMap;
}

lor.set('1','1');
lor.set('2','1');
lor.set('3','1');
lor.set('4','1');
lor.set('5','1');
lor.set('6','1');
lor.set('7','1');
lor.remove('6');
console.log(lor);
lor.set('8','1');
lor.set('9','1');
lor.set('10','1');
console.log(lor);


// setNewHashMap(lor, arr);
// console.log(lor);
// console.log(lor.get('Human'));
// lor.remove('Wizard');
// console.log(lor);
// console.log('line 32 MAX_LOAD RATIO:', lor.set.MAX_LOAD_RATIO);

