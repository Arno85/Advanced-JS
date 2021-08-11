if (5 > 4) {
    var myVar = 1
}

console.log(myVar) // 1


function a() {
    var myVar2 = 2
}

a();

// console.log(myVar2) // myVar2 is not defined


if (5 > 4) {
    const myVar3 = 3
}

console.log(myVar3) // myVar is not defined


function b() {
    const myVar4 = 4
}

b();

console.log(myVar4) // myVar2 is not defined
