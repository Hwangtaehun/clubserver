function sum(a: number, b: number): number{
    return a + b;
}

function same(a: number, b: number): boolean{
    return a === b;
}

var result: number = sum(1, 2);

function getA(a = 10){
    return a;
}

function getB(a: number){
    let c = '20';
    return a + c;
}

result = getA();
console.log(result);

var a = getB(10);
console.log(a);