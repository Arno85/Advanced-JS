console.log(this);

function a() {
    console.log(this);
}

a(); // === window.a(). this is the object that the function is a property of so... window


function b() {
    'use strict';
    console.log(this);
}

b(); // use strict empeche que this refere au global object. ES6 modules ont use strict par defaut.

const obj = {
    name: 'Tom',
    sing() {
        return 'lalala ' + this.name;
    },
    singAgain() {
        console.log('singAgain', this);

        function areYouSureForThis() {
            console.log('areYouSureForThis', this);
        }
        areYouSureForThis();

        function thisTimeImSure() {
            console.log('thisTimeImSure', this);
        }
        thisTimeImSure.bind(this)(); // Here this equal to the object because it's in the sing method

        var self = this; // same thing, this in this moment equal to the object
        function imSureWithSelfToo() {
            console.log('imSureWithSelfToo', self);
        }
        imSureWithSelfToo();
    }
}

console.log(obj.sing());
console.log(obj.singAgain());