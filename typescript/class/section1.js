// var capt = {
//     name: '캡틴',
//     skill: '방패 던지기'
// }
// var lee = {
//     name: '길벗',
//     skill: '좋은 책 만들기'
// }
//생성자 함수
// function Person(name: string, skill: string) {
//     this.name = name;
//     this.skill = skill
// }
// var capt =  new Person('캡틴', '방패 던지기');
// var lee =  new Person('길벗', '좋은 책 만들기');
//클래스
var Person = /** @class */ (function () {
    function Person(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    return Person;
}());
