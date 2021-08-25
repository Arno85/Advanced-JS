// Exercise Amazon
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
}

function trackHistory(action, data) {
    console.log(action, data);
}

function priceWithTaxes(price) {
    price += price * 3 / 100;
    return +price.toFixed(2);
}

function emptyCart() {
    user.cart = [];
}

function addToCart(name, price) {
    user.cart.push({ name, price: priceWithTaxes(price) });
    trackHistory('Add to Cart', user.cart);
}

function buyOrder() {
    user.purchases = [...user.purchases, ...user.cart];
    trackHistory('Buy Order', user.purchases);
    emptyCart();
}

function refundItem(name) {
    user.purchases = user.purchases.filter(p => p.name !== name);
    trackHistory('Refund Item', user.purchases);
}

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

addToCart('broom', 25.56);
addToCart('pen', 5.99);
buyOrder();
addToCart('metal bottle', 12.58);
addToCart('batteries', 6.98);
buyOrder();
refundItem('batteries');

// Pure Functions

const array = [1, 2, 3];
function mutateArray(arr) {
    arr.pop();
    return arr;
}
console.log('❌ not pure function', mutateArray(array), array);

const array2 = [1, 2, 3];
function removeLastItem(arr) {
    const newArray = [...arr];
    newArray.pop();
    return newArray;
}
console.log('✔ pure function', removeLastItem(array2), array2);

// Currying

const curriedMultiple = (a) => (b) => (c) => a * b * c;
const resultCurrying = curriedMultiple(2)(3)(10);
console.log(resultCurrying);

// Partial Application

const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
const partialResult = partialMultiplyBy5(2, 3);
console.log(partialResult);

// Memoization
function memoizedAddTo80() {
    let cache = {};

    return function (n) {
        if (!(n in cache)) {
            console.log('process that take a long time!');
            cache[n] = n + 80;
        } else {
            console.log('from cache');
        }

        return cache[n];
    }
}

const addTo80 = memoizedAddTo80();
console.log('1 - ', addTo80(5));
console.log('2 - ', addTo80(6));
console.log('3 - ', addTo80(5));

// Composing and pipe
const multiplyBy3 = (num) => num * 3;
const makePositive = num => Math.abs(num);

// Compose
const compose = (f, g) => (data) => f(g(data));
const multiplyBy3AndAbsoluteCompose = compose(multiplyBy3, makePositive);
console.log('compose', multiplyBy3AndAbsoluteCompose(-20));

// Pipe
const pipe = (f, g) => (data) => g(f(data));
const multiplyBy3AndAbsolutePipe = pipe(multiplyBy3, makePositive);
console.log('pipe', multiplyBy3AndAbsolutePipe(-20));

// Solution Exercise Amazon with FP principles
//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

const userAmazon = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
}

const composePurchase = (f, g) => (...args) => f(g(...args));
const purchaseItem = (...fns) => fns.reduce(composePurchase);

// What reduce do ?
// Transform prevVal et currVal to f(g(...args)) for every iteration

// const composePurchase = (f, g) => {
//     console.log(f);
//     console.log(g);
//     return (...args) => {       
//         // 1st iter => emptyTheCart(buyItem(user, item))
//         // 2nd iter => emptyTheCart(buyItem(applyTaxToItem(user, item)))
//         // 3rd iter => emptyTheCart(buyItem(applyTaxToItem(addItemToCart(user, item))))
//         return f(g(...args));
//     };
// }

function addItemToCart(user, item) {
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
    const { cart } = user;
    const taxRate = 1.03;
    const updatedCart = cart.map(item => ({
        name: item.name,
        price: item.price * taxRate
    }));
    return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
    return Object.assign({}, user, { purchases: user.cart });
}

function emptyTheCart(user) {
    return Object.assign({}, user, { cart: [] });
}

const result = purchaseItem(
    emptyTheCart,
    buyItem,
    applyTaxToItems,
    addItemToCart)
    (userAmazon, { name: 'laptop', price: 1200 });

console.log(result);


