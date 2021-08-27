// Error not catched
console.log('hello');
// throw new Error('oopsie!');
console.log('world');

// Error catched
console.log('hello');
try {
    consol.log('console mispelled!');
} catch (e) {
    console.error(e);
}
console.log('world');

const myError = new Error('oopsie');
console.log({ name: myError.name, message: myError.message, stackTrace: myError.stack });

new Error() // Generic Error
new SyntaxError(); // JS syntax errors
new ReferenceError(); // Not defined variables

// Async error handling

Promise.resolve()
    .then(data => {
        throw new Error('asyncfail');
    })
    .catch(err => console.log(err));

(async function () {
    try {
        await Promise.reject('oopsie async');
    } catch (err) {
        console.log(err);
    }
})();

// Extending Errors
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AuthenticationError';
        this.favouriteSnacks = 'grapes';
        this.message = 'Unable to authenticate';
    }
}

const authErr = new AuthenticationError('user cannot authenticate!');
console.log(authErr.message);