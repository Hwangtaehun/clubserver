var Person = /** @class */ (function () {
    function Person(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    return Person;
}());
var WaterPurifier = /** @class */ (function () {
    function WaterPurifier(waterAmount) {
        this.waterAmount = waterAmount;
    }
    WaterPurifier.prototype.wash = function () {
        if (this.waterAmount > 0) {
            console.log('정수기 동작 성공');
        }
    };
    return WaterPurifier;
}());
var capt = new Person('캡틴', '방패 던지기');
console.log(capt.name);
capt.name = '헐크';
console.log(capt.name);
var purifier = new WaterPurifier(30);
purifier.wash();
purifier.waterAmount = 0;
purifier.wash();
