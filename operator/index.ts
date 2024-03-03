//1.
function logtext(text: string | number) {
    console.log(text);
}

logtext('hi');
logtext(100);

//3.
interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

function introduce(someone: Person | Developer){
    if('age' in someone){
        console.log(someone. age);
        return;
    }

    if('skill' in someone){
        console.log(someone.skill);
        return;
    }
}

function logText(text: string | number){
    if (typeof text === 'string') {
        console.log(text.toUpperCase());
    }

    if(typeof text === 'number') {
        console.log(text.toLocaleString());
    }
}

4.
interface Avenger {
    name: string;
}

interface Hero {
    skill: string;
}

function interface(someone:Avenger & Hero) {
    console.log(someone.name);
    console.log(someone.skill);
}

interface({ name: '캡틴', skill: '어셈블' });