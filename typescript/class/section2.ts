// function Person(name: string, skill: string) {
//     this.name = name;
//     this.skill = skill
// }

// Person.prototype.sayHi = function() {
//     console.log('hi');
// }

class Person{
    name: string;
    skill: string;

    constructor(name: string, skill: string){
        this.name = name;
        this.skill = skill;
    }

    sayHi(){
        console.log('hi');
    }
}

class Developer extends Person {
    constructor(name, skill){
        super(name, skill);
    }

    coding(){
        console.log(this.name + '은 ' + this.skill + '라는 기술을 가지고 있다.');
    }
}

// var joo = new Person('형주', '인프랩 운영');

// console.log(joo.name);
// console.log(joo.skill);
// joo.sayHi();

var capt = new Developer('캡틴', '방패 던지기');
capt.coding();
capt.sayHi();
console.log(capt.name);
console.log(capt.skill);