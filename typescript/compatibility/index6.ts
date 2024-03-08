enum Language {
    C,
    Java,
    TypeScript
}

enum Programming {
    C,
    Java,
    TypeScript
}

//숫자형 이넘과 number 타입 호환
var a: number = 10;
a = Language.C;

//이넘 타입 간 호환 여부 -> 호환 안됨
// var langC: Language.C;
// langC = Programming.C;