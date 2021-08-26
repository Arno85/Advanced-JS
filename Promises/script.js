// ES6: Promise
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Error!');
    }
});

promise
    .then(res => res + '!')
    .then(res => res + '?')
    .catch(console.log)
    .then(res => {
        // throw Error;
        res + '!';
    })
    .then(console.log);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'hello');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'world');
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, '!');
});

Promise.all([promise, promise2, promise3, promise4])
    .then(values => console.log(values));


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
];

const promises = urls.map(url => {
    return fetch(url).then(resp => resp.json());
});

Promise.all(promises)
    .then(res => console.log('promise all', res))
    .catch(console.log)
    .finally(() => console.log('promise all finally'));



// ES8: Async/Await
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log('async/await', data);
}
fetchUsers();

const getData = async function () {
    try {
        const res = await Promise.all(promises);
        console.log('promise all async/await', res);
    } catch (err) {
        console.log(err);
    } finally {
        console.log('promise all async/await finally')
    }
}
setTimeout(() => getData(), 1000);

// for await of
const getData2 = async function () {
    try {
        for await (let res of promises) {
            console.log('for await of', res);
        }
    } catch (err) {
        console.log(err);
    } finally {
        console.log('for await of finally')
    }
}
setTimeout(() => getData2(), 2000);



// Queues

//CallBack Queue
setTimeout(() => console.log('Hi! I\'m a console.log in setTimeout so from the CallBack Queue. I\'m third because my queue is not prioritary'), 0);
// Job Queue
Promise.resolve('Hi! I\'m from a console.log in a Promise so from the Job Queue. I\'m second because my queue is prioritary')
    .then(console.log);
// CallStack
console.log('Hi! I\'m a console.log in the script so from the CallStack. I\"m first because I have priority on any queues');



// Parallel, Sequence and Race
const promisify = (item, delay) =>
    new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${ output1 } ${ output2 } ${ output3 }`;
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${ output1 }`;
}

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${ output1 } ${ output2 } ${ output3 }`
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);


// ES2020: allSettled()
const promiseOne = new Promise((resolve, reject) => setTimeout(() => resolve('PromiseOne succeded Value'), 6000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(() => reject('PromiseTwo failed Reason'), 6000));
Promise.allSettled([promiseOne, promiseTwo])
    .then(data => console.log(data))
    .catch(console.log);

