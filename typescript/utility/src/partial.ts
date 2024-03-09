interface Todo {
    id: string;
    title: string;
    checked: boolean;
}

type OptionalTodo = Partial<Todo>;