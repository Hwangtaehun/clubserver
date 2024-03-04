// function printTextLength<T extends {length: number}>(text: T){
//     console.log(text.length);
// }

// printTextLength<string>('hello');

function printTextLength<T>(text: T[]){
    console.log(text.length);
}

printTextLength<string>(['a', 'b', 'c']);
printTextLength<number>([100]);
printTextLength([true, false]);