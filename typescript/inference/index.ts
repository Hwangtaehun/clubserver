interface Dropdown<T> {
    title: string;
    value: T; 
}

interface DetailedDropdown<T> extends Dropdown<T> {
    tag: string;
    description: string;
}

let shoppingDetailItem: DetailedDropdown<number> = {
    title: '길벗 책',
    description: '쉽고 유용하다',
    tag: '타입스크립트',
    value: 1
}