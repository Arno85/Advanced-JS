const normal = 'color: #bada55; font-size: 12px';
const title = 'color: lightblue; font-size: 20px';

console.log('%c Global context', title);
console.log('%c this', normal, this);
console.log('%c window', normal, window);
console.log('%c this === window', normal, this === window);

function aaaFunc() {
    console.log('%c aaaFunc context', title);
    console.log('%c this', normal, this);
}

aaaFunc();