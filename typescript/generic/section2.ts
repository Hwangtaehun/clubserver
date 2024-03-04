function embraceEverything<T>(thing: T): T {
    return thing;
}

embraceEverything<string>('hi');
embraceEverything<number>(100);
embraceEverything<boolean>(false);
embraceEverything<{ name: string }>({ name: 'capt' });

// function embraceEverything<T extends string>(thing: T): T {
//     return thing;
// }

//위 코드와 같은 역할
// function embraceEverything(thing: string): string {
//     return thing;
// }

function lengthOnly<T extends { length: number }>(value : T){
    return value.length;
}

lengthOnly('hi');
lengthOnly([1, 2, 3]);
lengthOnly({ title: 'abc', length: 123 });