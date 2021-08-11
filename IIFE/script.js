var aaa = (function () {
    function a() {
        return 'a';
    }

    return {
        a
    }
})();

function a() {
    return 'ovveride';
}

console.log(a());
console.log(aaa.a());
