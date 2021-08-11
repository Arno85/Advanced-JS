// Function Expression
var canada = () => {
    console.log('cold');
}

// Function Declaration
function india() {
    console.log('warm');
}

canada();
india();

function marry(person1, person2) {
    console.log(this);
    console.log(arguments);
}

marry('Tim', 'Jody');