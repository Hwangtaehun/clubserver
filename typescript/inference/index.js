function sum(a, b) {
    return a + b;
}
function same(a, b) {
    return a === b;
}
var result = sum(1, 2);
function getA(a) {
    if (a === void 0) { a = 10; }
    return a;
}
function getB(a) {
    var c = '20';
    return a + c;
}
result = getA();
console.log(result);
var a = getB(10);
console.log(a);
