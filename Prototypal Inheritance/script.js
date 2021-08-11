console.log('Arrays and functions are Objects');

const array = [];
console.log('Base array: array.__proto__', array.__proto__);
console.log('Base object: array.__proto__.__proto__', array.__proto__.__proto__);

const func = () => { };
console.log('Base function: func.__proto__', func.__proto__);
console.log('Base object: func.__proto__.__proto__', func.__proto__.__proto__);

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        return `I am ${ this.name } and I sing lalala`;
    }
}

console.log(dragon.sing());

let lizard = {
    name: 'Kiki',
    fight() {
        return 1;
    }
}

// Allow lizard to have eveything dragon has and keep the values for the things it already has
lizard.__proto__ = dragon;

console.log(lizard.sing());
console.log(lizard.fire);
console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.isPrototypeOf(dragon));

for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log('Own Property:', prop);
    } else {
        console.log('Inheritance Property:', prop);
    }
}

function a() { }

console.log('a() hasOwnProperty name', a.hasOwnProperty('name'));
console.log('a() hasOwnProperty arguments', a.hasOwnProperty('arguments'));
console.log('a() hasOwnProperty call', a.hasOwnProperty('call'));
console.log('a() hasOwnProperty apply', a.hasOwnProperty('apply'));
console.log('a() hasOwnProperty bind', a.hasOwnProperty('bind'));
console.log('a.__proto__ = Base Function hasOwnProperty call', a.__proto__.hasOwnProperty('call'));
console.log('a.__proto__ = Base Function hasOwnProperty apply', a.__proto__.hasOwnProperty('apply'));
console.log('a.__proto__ = Base Function hasOwnProperty bind', a.__proto__.hasOwnProperty('bind'));

console.log(Array.prototype);
console.log(Function.prototype);
console.log(Object.prototype);


// Create own prototype
let human = {
    mortal: true
}

let socrates = Object.create(human);
socrates.age = 70;
console.log(socrates.age);
console.log(socrates.mortal);
console.log(human.isPrototypeOf(socrates));

// Exercices 1
// Add lastYear() method to the Date Object.
// new Date('1900-10-10').lastYear(); // 1899

const lastYear = function () {
    return this.getFullYear() - 1;
}

Date.prototype.lastYear = lastYear;
console.log(new Date('1900-10-10').lastYear());

// Exercices 2
// Modify .map() to print '😀' at the end of each item.
// console.log([1, 2, 3].map()) // 1😀, 2😀, 3😀

const smileyMap = function () {
    const smileyArr = [];

    this.forEach(element => {
        smileyArr.push(element + '😀');
    });

    return smileyArr.join(", ");
}

Array.prototype.map = smileyMap;
console.log([1, 2, 3].map());

//Exercice 3
// Own bind() method

Function.prototype.bind = function (whoIsCallingMe) {
    const self = this;
    return function () {
        return self.apply(whoIsCallingMe, arguments);
    };
}