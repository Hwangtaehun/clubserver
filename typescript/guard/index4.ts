interface Person {
    name: string;
    age: number;
    industry: 'common';
}

interface Developer {
    name: string;
    skill: string;
    industry: 'tech';

}

function greet(someone: Person | Developer){
    switch(someone.industry){
        case 'common':
            console.log(someone.age.toFixed(2));
            break;
        case 'tech':
            console.log(someone.skill.split(''));
            break;
    }
}

function sayHi(message: string | null){
    if(message&&message.length >= 3){
        console.log(message);
    }
    // if(message!.length >= 3){
    //     console.log(message);
    // }
}