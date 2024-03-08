function updateInput(textInput: number | string | boolean){
    if(typeof textInput === 'number'){
        console.log(textInput.toFixed(2));
        return;
    }
    if(typeof textInput === 'string'){
        console.log(textInput.length);
        return;
    }
}

// function updateInput(textInput: number | string | boolean){
//     (textInput as number).toFixed(2);
//     console.log((textInput as string).length);
// }

updateInput(1.0334);
updateInput('hello');

function printText(text: string | number) {
    if(typeof text === 'string'){
        console.log(text.trim());
    }
}