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

type User = {
    id: string;
    name: string;
}

var seho: User;

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

//확장 방식
// type Devaloper = {
//     skill: string;
// }

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
