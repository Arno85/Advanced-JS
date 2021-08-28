// Arrays
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    unshift(item) {
        const dataCopy = { ...this.data };
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i + 1] = dataCopy[i];
        }
        this.data[0] = item;
        this.data[this.length] = dataCopy[this.length - 1];
        this.length++;
        return this.length;
    }

    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        this.length--;
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }
}

const newArray = new MyArray();
newArray.push('hello');
newArray.push('world');
newArray.push('!!');
newArray.pop();
newArray.delete(0);
newArray.unshift('tourlou');
newArray.unshift('stash');
newArray.unshift('gni');
console.log(newArray);

const reverse = (str) => [...str].reverse().join('');
console.log(reverse('Hi my name is Arnaud!'));

const mergeSortedArrays = (arr1, arr2) => arr1.concat(arr2).sort((a, b) => a - b);
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// Hash Tables
const map = new Map(); // sorted hash table with any type of key
const set = new Set(); // store only keys, no values

class HashTable {
    constructor(size) {
        this.table = new Array(size);
    }

    set(key, value) {
        const address = this._hash(key);

        if (!this.table[address]) {
            this.table[address] = [];
        }

        this.table[address].push([key, value]);

        return address;
    }

    get(key) {
        const item = this.table[this._hash(key)].find(x => x[0] === key);

        if (!item) {
            return;
        }

        return item[1];
    }

    keys() {
        const keys = [];
        this.table.forEach(x => {
            x.forEach(y => keys.push(y[0]));
        });
        return keys;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.table.length
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 100);
myHashTable.set('bananas', 595);
myHashTable.set('mangoes', 69587);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('bananas'));
console.log(myHashTable.get('mangoes'));
console.log(myHashTable.table);
console.log(myHashTable.keys());

// Exercices
const firstRecurringCharacter = (array) => {
    const recurringNumbers = {};
    for (let i = 0; i < array.length - 1; i++) {
        if (recurringNumbers[array[i]]) {
            return array[i];
        } else {
            recurringNumbers[array[i]] = 1;
        }
    }

    return undefined;
}

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));

//Given an array = [2,3,4,5]:
//It should return undefined
console.log(firstRecurringCharacter([2, 3, 4, 5]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));