interface User {
    name: string;
    age: number;
}

interface Person {
    name?: string;
    age: number;
}

function logAge(someone: Person){
    console.log(someone.age);
}

//4.
function logPersonInfo(you: Person){
    console.log(you.name);
    console.log(you.age);
}

var captain = { age: 100 };
logAge(captain);

//1.
var seho: User = { name: '세호', age: 36 };
// var seho1: User = { name: '세호', age: '36' };
// var seho2: User = { name: '세호', age: 36, hobby: '와인' };

//2.
var captain1 = {name: 'Capt', age: 100};
logAge(captain1);
// var captain2 = { name: 'Capt' };
// logAge(captain1);

//3.
function getPerson(someone: Person): Person{
    return someone;
}

var hulk = getPerson({ name: 'Hulk', age: 99 });