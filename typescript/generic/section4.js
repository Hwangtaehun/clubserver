// function printTextLength<T extends {length: number}>(text: T){
//     console.log(text.length);
// }
// printTextLength<string>('hello');
function printTextLength(text) {
    console.log(text.length);
}
printTextLength(['a', 'b', 'c']);
printTextLength([100]);
printTextLength([true, false]);
