//7.
// function logText(text: string | number){
//     if (typeof text === 'string') {
//         console.log(text.toUpperCase());
//     }

//     if(typeof text === 'number') {
//         console.log(text.toLocaleString());
//     }
// }

// var message: string | number = '안녕하세요.';
// logText(message);

type MyMessage = string | number;
function logText(text: MyMessage){
    if (typeof text === 'string') {
        console.log(text.toUpperCase());
    }

    if(typeof text === 'number') {
        console.log(text.toLocaleString());
    }
}

var message: MyMessage = '안녕하세요.';
logText(message);

// type User = {
//     id: string;
//     name: string;
// }

// var seho: User;

//별칭은 가능
// type ID = string;
// type Product = TShirt | Shoes;
// type Teacher = Person & Adult;
// type Gilbut<T> = {
//     book: T;
// }
// type MyBeer = Pick<Bear, 'brand'>;

interface Person {
    name: string;
    age: number;
}

type Adult = {
    old: boolean;
}

type Teacher = Person & Adult;

// 확장 방식
type Developer = {
    skill: string;
}

// var joo: Person & Devaloper = {
//     name: '형주',
//     age: 21,
//     skill: '웹개발'
// };

//선언 병합
interface Person {
    address: string;
}

var sun: Person = {
    name: '세호',
    age: 30,
    address: '광교'
};

//3.타입 별칭으로만 정의할 수 있는 타입들
type MyString = string;
type StringOrNumber = string | number;
type Job = Person & Developer;

//제네릭
type Dropdown<T> = {
    id: string;
    title: T;
}

// 유틸리티 타입
// type Admin = { name : string; age : number; role: string; }
// type OnlyName = Pick<Admin, 'name'>

// 맵드 타입
type Picker< T, K extends keyof T > = {
    [P in K]: T[P];
};

interface Admin {
    role: string;
    department: string;
}

interface User extends Admin {
    id: string;
    name: string;
}

interface User{
    skill: string;
}

//interface는 상속 가능 하지만 타입 별칭은 상속 불가능