function Sum(a:number, b:number) {
    return a + b;
}

// function sayWord(word :타입'매개변수 타입') :타입'리턴 타입'{
//     return word;
// }

function sayWord(word: string) : string{
    return word;
}

console.log(Sum(10, 20));

//var 변수: Array<배열의 데이터 타입> = [];, var 변수: 배열의 데이터 타입[] = [];
//tuple은 var 변수: [데이터 타입, 데이터 타입] = [값, 값];
//빈값 -> var empty: null = null;, var nothingAssigned: undefinde;