var x = 'x';
console.log('global context', x);

function sayMyName() {
    var a = 'a';
    console.log('sayMyName context', a);
    console.log('sayMyName context', x);

    return function findName() {
        var b = 'b';
        console.log('findName context', b);
        console.log('findName context', a);
        console.log('findName context', x);

        return function printName() {
            var c = 'c';
            console.log('printName context', c);
            console.log('printName context', b);
            console.log('printName context', a);
            console.log('printName context', x);

            return 'Arnaud Martin';
        }
    }
}

var res = sayMyName()()();
console.log(res);