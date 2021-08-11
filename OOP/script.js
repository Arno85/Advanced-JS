// Create Prototypal Inheritance with Object.create()
// Not often used
const elfFunctionsStore = {
    attack() {
        return `${ this.name } attack with ${ this.weapon }`;
    }
}

function createElf(name, weapon) {
    let newElf = Object.create(elfFunctionsStore); //inherit of elFunctionsStore Object
    console.log(newElf)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones');
const sam = createElf('Sam', 'bow');
console.log(peter.attack());
console.log(sam.attack());


// Create Prototypal Inheritance with Constructor functions
// ES5-
function ElfCtorFunc(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

ElfCtorFunc.prototype.attack = function () {
    return `${ this.name } attack with ${ this.weapon }`;
}

const arwen = new ElfCtorFunc('Arwen', 'stones');
const filip = new ElfCtorFunc('Filip', 'bow');
console.log(arwen.attack());
console.log(filip.attack());
console.log(arwen);


// Create Prototypal Inheritance with classes
// ES6+
class ElfClass {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return `${ this.name } attack with ${ this.weapon }`;
    }
}

const legolas = new ElfClass('Legolas', 'stones');
const jack = new ElfClass('jack', 'bow');
console.log(legolas.attack());
console.log(jack.attack());

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return `${ this.name } attack with ${ this.weapon }`;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }

    makeFort() {
        return 'strongest fort in the world made';
    }
}

const dolby = new Elf('Dolby', 'magic', 'house');
const shrek = new Ogre('Shrek', 'club', 'green');
console.log(dolby.attack());
console.log(shrek.attack());
console.log(shrek.makeFort());

// Exercises

class Char {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon
    }
}

class Queen extends Char {
    constructor(name, weapon, type) {
        super(name, weapon)
        this.type = type;
    }

    attack() {
        console.log(super.attack());
        return `I am the ${ this.name } queen of ${ this.type }, now bow down to me!`
    }
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

console.log(victoria.attack()) // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
