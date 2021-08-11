function a() {
    console.log('hi');
}

a.call();
a.apply();

const wizard = {
    name: 'Merlin',
    health: 50,
    heal(healValue) {
        this.health += healValue;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30,
}

wizard.heal.call(archer, 30);
wizard.heal.apply(archer, [30]);
console.log('archer health after being healed by wizard twice', archer.health);

const healArcher = wizard.heal.bind(archer);
healArcher(200)
console.log('archer was jealous and learnt to heal', archer.health);

// Function currying
function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};

const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't