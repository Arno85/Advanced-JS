const list = [
    {
        type: 5,
        value: typeof 5,
        primitive: true,
    },
    {
        type: true,
        value: typeof true,
        primitive: true,
    },
    {
        type: 'Hello world',
        value: typeof 'Hello world',
        primitive: true,
    },
    {
        type: undefined,
        value: typeof undefined,
        primitive: true,
    },
    {
        type: null,
        value: typeof null,
        primitive: true,
        note: 'This is an error in JS. It should be type null',
    },
    {
        type: Symbol('test'),
        value: typeof Symbol('test'),
        primitive: true,
    },
    {
        type: {},
        value: typeof {},
        primitive: false,
    },
    {
        type: [],
        value: typeof [],
        primitive: false,
    },
    {
        type: function () { },
        value: typeof function () { },
        primitive: false,
        note: 'Functions are objects even if it\'s says otherwise',
    }
];

console.table(list);

// Arrays are objects

var array = [1, 2, 3];
// in JS is equal to do
var array = {
    0: 1,
    1: 2,
    2: 3
};

console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray({ 0: 1, 1: 2, 2: 3 }));

// Passed by Value (primitives)
var a = 5;
var b = a;

b++;
console.log(a, b); //5 6

// Passed by Reference (non primitives)

let obj1 = {
    name: 'Tom',
    password: '123',
    deep: {
        a: 'a'
    }
};

let obj2 = Object.assign({}, obj1); // shallow clone or {...obj1}
let obj3 = JSON.parse(JSON.stringify(obj1)); // deep clone
let obj4 = obj1;

obj4.password = 'ezpz';
obj4.deep.a = 'got ya!';
console.log(obj1, obj2, obj3, obj4);

const arr1 = [1, 2, 3, { deep: 'a' }];
const arr2 = [].concat(arr1); // shallow clone or [...arr1]
const arr3 = JSON.parse(JSON.stringify(arr1)); // deep clone
const arr4 = arr1;

arr4.push(5);
arr4[3].deep = 'got ya!';
console.log(arr1, arr2, arr3, arr4);

