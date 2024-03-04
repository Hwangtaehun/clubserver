// function Person(name: string, skill: string) {
//     this.name = name;
//     this.skill = skill
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Person.prototype.sayHi = function() {
//     console.log('hi');
// }
var Person = /** @class */ (function () {
    function Person(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    Person.prototype.sayHi = function () {
        console.log('hi');
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, skill) {
        return _super.call(this, name, skill) || this;
    }
    Developer.prototype.coding = function () {
        console.log(this.name + '은 ' + this.skill + '라는 기술을 가지고 있다.');
    };
    return Developer;
}(Person));
// var joo = new Person('형주', '인프랩 운영');
// console.log(joo.name);
// console.log(joo.skill);
// joo.sayHi();
var capt = new Developer('캡틴', '방패 던지기');
capt.coding();
capt.sayHi();
console.log(capt.name);
console.log(capt.skill);
