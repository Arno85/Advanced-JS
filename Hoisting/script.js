// Execution avant assignation

console.log(teddyVar);
// console.log(teddyLet);
console.log(sing());
// console.log(sing2());

var teddyVar = 'bear';
let teddyLet = 'bear';

var sing2 = function () {
    return 'oh la la';
}

function sing() {
    return 'oh la la';
}

// Exercices

var favoriteFood = 'grapes';
var foodThoughts = function () {
    console.log('original favorite food', favoriteFood);

    var favoriteFood = 'sushi';

    console.log('new favorite food:', favoriteFood);
}

foodThoughts();

// Pourquoi 1er console.log est undefined ?

// 1- Global Context Hoisting
var favoriteFood = undefined;
var foodThoughts = undefined;

// 2- Code Execution
var favoriteFood = 'grapes';
var foodThoughts = function () { }
foodThoughts();

// 3- Ok foodThought est une fonction et il y a un var, donc FoodThought Context Hoisting
var favoriteFood = 'grapes';
var foodThoughts = function () {
    var favoriteFood = undefined;
}

// 4- FoodThough Execution
var favoriteFood = 'grapes';
var foodThoughts = function () {
    console.log('original favorite food', favoriteFood); // undefined

    var favoriteFood = 'sushi';

    console.log('new favorite food:', favoriteFood); // sushi
}
foodThoughts();