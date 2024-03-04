function getText<T>(text: T): T{
    return text;
}

getText<string>('100');
getText<number>(100);
getText<boolean>(true);
getText<number[]>([1, 2, 3]);
getText<Array<number>>([1, 2, 3]);
getText<object>({n:'name', a:100});

interface ProductDropdown {
    value: string;
    selected: boolean;
}

interface StockDropdown {
    value: number;
    selected: boolean;
}

interface AddressDropdown {
    value: { city: string; zipCode: string };
    selected: boolean;
}

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

// var product: ProductDropdown;
// var stock: StockDropdown;
// var address: AddressDropdown;

var product: Dropdown<string>;
var stock: Dropdown<number>;
var address: Dropdown<{ city: string; zipCode: string }>;