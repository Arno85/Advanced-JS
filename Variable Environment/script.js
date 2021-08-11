function two() {
    var isValid;
    console.log('two context isValid', isValid);
    console.log('global context isInvalid', isInvalid);
}

function one() {
    var isValid = true;
    console.log('one context isValid', isValid);
    two();
}

var isValid = false;
var isInvalid = true;
console.log('global context isValid', isValid);
one();
