interface Todo{
    id: string;
    title: string;
}

interface Person {
    name: string;
    age: number;
}

type Hero = {
    name: string;
    skill: string;
}

type OptionalTodo = Partial<Todo>;
type MyPartial<T> = {
    [P in keyof T]?: T[P];
}

// type MyPartial<Type> = {
//     [Property in keyof Type]?: Type[Property];
// }

type TodoPartial = MyPartial<Todo>;
type PersonPartial = MyPartial<Person>; 
type HeroPartial = MyPartial<Hero>;