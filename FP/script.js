// Exercises
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