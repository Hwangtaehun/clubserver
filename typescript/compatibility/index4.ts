// type Person = {
//     name: string;
//     //추가
//     skill: string;
// }

// interface Developer {
//     name: string;
//     //추가
//     skill: string;
// }

// var joo: Person = {
//     name: '형주',
//     skill: '웹 개발',
// };

// var capt: Developer = {
//     name: '캡틴',
//     skill: '방패 던지기',
// };

// capt = joo;
// joo = capt;

type Person = {
    name: string;
}

interface Developer {
    name: string;
    skill?: string;
}

var joo: Person = {
    name: '형주',
};

var capt: Developer = {
    name: '캡틴',
    skill: '방패 던지기',
};

capt = joo;
joo = capt;