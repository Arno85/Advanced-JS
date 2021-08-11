// HOF that take another function in parameter

function authenticate(person) {
    const verify = person.level === 'admin' ? 500000 : 100000;
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }
    return 'Access granted ' + person.name
}

function sing(person) {
    return 'lalala my name is ' + person.name;
}

function letPerson(person, fn) {
    return fn(person);
}

console.log(letPerson({ level: 'user', name: 'Tim' }, authenticate));
console.log(letPerson({ level: 'admin', name: 'Sally' }, authenticate));
console.log(letPerson({ level: 'user', name: 'Tim' }, sing));


// HOF that return another function

// function multiplyBy(num1) {
//     return function (num2) {
//         num1 * num2;
//     }
// }

const multiplyBy = (num1) => (num2) => num1 * num2; // short way;
const multiplyByTen = multiplyBy(10);

console.log(multiplyBy(4)(2));
console.log(multiplyBy(10)(5));
console.log(multiplyByTen(5));