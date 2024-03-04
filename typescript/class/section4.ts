class Person{
    name: string;
    skill: string;

    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }
}

class WaterPurifier {
    waterAmount: number;

    constructor(waterAmount: number){
        this.waterAmount = waterAmount;
    }

    wash() {
        if(this.waterAmount > 0){
            console.log('정수기 동작 성공');
        }
    }
}

var capt = new Person('캡틴', '방패 던지기');
console.log(capt.name);
capt.name = '헐크';
console.log(capt.name);

var purifier = new  WaterPurifier(30);
purifier.wash();
purifier.waterAmount = 0;
purifier.wash();