//5.
interface Hero{
    power: boolean;
}

interface Person extends Hero{
    name: string;
    age: number;
}


interface Developer extends Person {
    skill: string;
}

// interface Developer extends Person {
//     skill: string;
// }

var ironman: Developer = {
    name: '아이언맨',
    age: 21,
    skill: '만들기',
    power: true
}

//6.1
// var user = {
//     name: '캡틴',
//     admin: true
// };

// console.log(user['name']);

// var companise= ['삼성', '네이버', '구글'];
// console.log(companise[0]);

interface StringArray {
    [index: number]: string;
}

var companise: StringArray = ['삼성', '네이버', '구글'] 
console.log(companise[0]);
console.log(companise[1]);
console.log(companise['첫번째인덱스']);

//6.2
interface SalaryMap {
    // [level: string]: number;
    [level: string]: string;
}

var salary: SalaryMap = {
    // junior: 100
    junior: '100원',
};

var money = salary['junior'];

//6.3
// interface SalaryInfo {
//     junior: string;
// }

interface SalaryInfo {
    [level: string]: string;
}

var salary1: SalaryInfo = {
    junior: '100원',
    mid: '400원',
    senior: '700원',
    ceo: '0원',
    newbie: '50원'
};