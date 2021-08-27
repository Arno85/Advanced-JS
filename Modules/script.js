// Module Pattern IIFE
var fightModule = (function () {
    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2 ? `${ char1 } wins` : `${ char2 } wins`
    }

    return {
        fight,
    }
})();


// CommonJS - used in Node and browsers with webpack or browserify.
var module1 = require('module1');
var module2 = require('module2');

function fight() { }

module.exports = {
    fight,
}

// AMD - used in require.js
define(['module1', 'module2'],
    function (module1Import, module2Import) {
        var module1 = module1Import;
        var module2 = module2Import;

        function dance() { }

        return {
            dance,
        }
    }
)

// ES6 modules
import module1 from 'module1';
import module2 from 'module2';

export const jump = () => { };
