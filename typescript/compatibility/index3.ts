type Captain = {
    name: string;
}

interface Antman {
    name: string;
}

var a: Captain = {
    name: '캡틴',
};

var b: Antman = {
    name: '앤트맨',
};

b = a;