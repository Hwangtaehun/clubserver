class Person{
    private name: string;
    private skill: string;

    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }

    protected sayHi(){
        console.log('hi');
    }
}

class Developer extends Person {
    constructor(name: string, skill: string){
        super(name, skill);
        this.sayHi;
    }

    coding(): void {
        // console.log('fun doing ' + this.skill + ' by ' + this.name);
        console.log('fun doing by ');
    }
}

// var capt = new Person('캡틴', '타입스크립트');
// capt.sayHi();

var hulk = new Developer('헐크', '자바스크립트');
hulk.coding();