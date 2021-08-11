// Ways to write invoke functions in JS

function one() {
    console.log(1)
}
one();

const obj = {
    two() {
        console.log(2)
    }
}
obj.two();

const three = () => {
    console.log(3);
}
three.call();
three.apply();

const four = new Function('arg', 'console.log(arg)');
four(4);
