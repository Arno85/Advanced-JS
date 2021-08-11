function a() {
    let grandpa = 'grandpa';

    return function b() {
        let father = 'father';

        return function c() {
            let son = 'son';
            return `${ grandpa } > ${ father } > ${ son }`;
        }
    }
}

console.log(a()()());

const boo = name1 => string => name2 => console.log(`${ name1 } ${ string } ${ name2 }`);
boo('Tarzan')('is married to')('Jane');


// Even when the function is sent to the Web Api, closures works. 
// By the time, the setTimeout is sentBack to the callstack, callMe is defined (no hoisting), callMeMaybe is popped off the stack, but callme is still usable.
function callMeMaybe() {
    setTimeout(function () {
        console.log(callMe);
    }, 4000);

    const callMe = 'Hi! I am now here!';
}

callMeMaybe();


// Memory efficient

function heavyDuty(index) {
    const bigArray = new Array(7000).fill('😀');
    console.log('-- array created in memory!');
    return bigArray[index];
}

console.log(heavyDuty(688));
console.log(heavyDuty(7));
console.log(heavyDuty(2563));
console.log(heavyDuty(563));
// ...

function heavyDutyClosure() {
    const bigArray = new Array(7000).fill('😀');
    console.log('-- array created in memory closure!');

    return function (index) {
        return bigArray[index];
    }
}

const hd = heavyDutyClosure();
console.log(hd(688));
console.log(hd(7));
console.log(hd(2563));
console.log(hd(563));


// Encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const timer = () => timeWithoutDestruction++;
    setInterval(timer, 1000);

    const launch = () => {
        timeWithoutDestruction = -1;
        return '💥'
    };

    const totalPeaceTime = () => timeWithoutDestruction;

    return {
        totalPeaceTime
    }
}

const ohNo = makeNuclearButton();


// Exercices
let view;

function initialize() {
    let called = 0;

    return function () {
        if (called > 0) {
            return;
        } else {
            view = '⛰';
            console.log('view has been set!');
            called++;
        }
    }
}

const startOnce = initialize();
startOnce();
startOnce();

console.log(view);

const array = [1, 2, 3, 4]; t6
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('i am at index ' + i);
    }, 3000)
}
