const HashMap = require('./hashmap');
///// lotr drill
// let arr = [
//   { Hobbit: 'Bilbo' },
//   { Hobbit: 'Frodo' },
//   { Wizard: 'Gandolf' },
//   { Human: 'Aragon' },
//   { Elf: 'Legolas' },
//   { Maiar: 'The Necromancer' },
//   { Maiar: 'Sauron' },
//   { RingBearer: 'Gollum' },
//   { LadyOfLight: 'Galadriel' },
//   { HalfElven: 'Arwen' },
//   { Ent: 'Treebeard' }
// ];

// let smallArr = [
//   { Hobbit: 'Frodo' },
//   { Wizard: 'Gandolf' },
//   { Human: 'Aragon' },
//     {Human: 'Alex'}];
// const lor = new HashMap();

// // lor.MAX_LOAD_RATIO = 0.9;
// // lor.SIZE_RATIO = 3;

// // console.log(lor.MAX_LOAD_RATIO);

// function setNewHashMap(hashMap, array) {
//   for (let i = 0; i < array.length; i++) {
//     let [key] = Object.keys(array[i]);
//     let value = array[i][key];

//     hashMap.set(key, value);
//   }
//   return hashMap;
// }

// lor.set('1','1');
// lor.set('2','1');
// lor.set('3','1');
// lor.set('4','1');
// lor.set('5','1');
// lor.set('6','1');
// lor.set('7','1');
// lor.remove('6');
// console.log(lor);
// lor.set('8','1');
// lor.set('9','1');
// lor.set('10','1');
// console.log(lor);


// // setNewHashMap(lor, arr);
// // console.log(lor);
// // console.log(lor.get('Human'));
// // lor.remove('Wizard');
// // console.log(lor);
// // console.log('line 32 MAX_LOAD RATIO:', lor.set.MAX_LOAD_RATIO);

//////// palindrome drill
let string = 'asdfdsa'
function palindromeHash(string)
let value = 1;
let palHashMap = new HashMap();
for(let i=0; i < string.length; i++){
let key = string[i] // a
  palHashMap.set(key, value) //if length = even let oddCharacter = false //length is odd then oddCharacter=true;
}
//each letter goes into hashmap
//set value to 1 and increment if letter is duplicated
//so if the value is even except for 1
//return true
//if the key a is there increase the value


// a: 1 if (string[i] === palHashMap.get(key)){
  palHashmapset(key, value++);
}

//input: string that is a palindrome or is not a palindrome
//example:  'aad'
//'awwa' vs 'awa' if word length is even then this if odd then this
//expected output: true

//what we expect the code to do: take first index of the string 'a' and 
//put it into a hashmap with a key of 'a' and a value of 1'
//next iteration of the for loop: 'look at a key and then increment the value by 1'
//last iteration: 'put d into the hashmap with the value of 1'
//do a check to see if there is all even values and possibly 1 odd value
//return true or false. (true)
