var getNumber = function(num: number){
    return num;
};

var add = function(a: number, b: number){
    return a + b;
};

var sum = function(x: number, y: number){
    return x + y;
};

add = sum;
sum = add;

//getNumber = sum; --> 이건 안됨
sum = getNumber;