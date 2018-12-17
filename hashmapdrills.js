const HashMap = require('./hashmap');

let arr = [{ Hobbit: "Bilbo" }, { Hobbit: "Frodo" }, { Wizard: "Gandolf" }, { Human: "Aragon" }, { Elf: "Legolas" }, { Maiar: "The Necromancer" }, { Maiar: "Sauron" }, { RingBearer: "Gollum" }, { LadyOfLight: "Galadriel" }, { HalfElven: "Arwen" }, { Ent: "Treebeard" }]

const lor = new HashMap();

function setNewHashMap(hashMap, array) {
    for (let i = 0; i < array.length; i++) {
        let [key] = Object.keys(array[i]);
        let value = array[i][key];

        hashMap.set(key, value);
    }
    return hashMap;
}

console.log(setNewHashMap(lor,arr));

