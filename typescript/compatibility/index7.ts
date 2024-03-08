interface Empty<T> {}

interface NotEmpty<T> {
    data: T;
}

var empty1: Empty<string> = '';
var empty2: Empty<number> = 0;

var notEmpty1 : NotEmpty<string>;
var notEmpty2 : NotEmpty<number> = {data: 0};

empty1 = empty2;
empty2 = empty1;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;