# Hoisting

Hoisting is the process of putting **all variables and functions in memory during the compilation phase**.
When the JS Engine parse the javascript file, all var and functions keywords are "spotted" to do the hoisting.

## Variables
**var** are partially hoisted, they are given a memory allocation but they are first initialized with a value of undefined. Which means, if we try to access the variable before initialization, we're going to have a result of undefined.
```
console.log(luke); // undefined

var luke = 'Skywalker';
```
The new ES6 keywords, **let** and **const** are hoisted but not initialized by default with undefined. It allows to avoid this weird result and throw instead, a *ReferenceError*.
```
console.log(luke); // Uncaught ReferenceError: Cannot access 'luke' before initialization

let luke = 'Skywalker';
```

## Functions

**functions declaration** are fully hoisted. If anywhere in the code we try to access the function, we are always going to have the result of the function.
Careful though, this is not the case for **function expressions**. They are initialized with undefined like a regular variable. If we try to execute a function expression before initialization, we're going to have a *TypeError*.
```
console.log(jedi());    // Uncaught TypeError: jedi is not a function
console.log(jedi2());   // May the force be with you

var jedi = function () {
    return 'May the force be with you';
}

function jedi2() {
    return 'May the force be with you';
}
```

## Exercice
If we do a little exercice to separate a piece of code in steps to mimic the hoisting process, this is what we have:

Original code:
```
var favoriteCharacter = 'Yoda';

var changedMyMind = function () {
    console.log('original favorite character', favoriteCharacter);

    var favoriteCharacter = 'Obi Wan';

    console.log('new favorite character:', favoriteCharacter);
}

changedMyMind();
```

Now if we transcript the hoisting process of the code above, step by step:
```
// 1- Global Context Hoisting
var favoriteCharacter = undefined;
var changedMyMind = undefined;

// 2- Code Execution
var favoriteCharacter = 'Yoda';
var changedMyMind = function () { }

// 3- Ok changedMyMind is a function with a variable favoriteCharacter, so changedMyMind Context Hoisting
var favoriteCharacter = 'Yoda';
var changedMyMind = function () {
    var favoriteCharacter = undefined;
}

// 4- FoodThough Execution
var favoriteCharacter = 'Yoda';

var changedMyMind = function () {
    console.log('original favorite character', favoriteCharacter); // undefined

    var favoriteCharacter = 'Obi Wan';

    console.log('new favorite character:', favoriteCharacter); // Obi Wan
}

changedMyMind();
```
So this is why, if we try to execute the original code, the first console.log of favoriteCharacter is gonna be undefined.