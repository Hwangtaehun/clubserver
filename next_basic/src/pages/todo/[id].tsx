import Link from "next/link";

export default function Todo({ todo }) {
    return(
        <>
            <h1>{todo.title}</h1>
            <ul>
                <li>
                    <Link href="/todo/1">1번</Link>
                </li>

                <li>
                    <Link href="/todo/2">2번</Link>
                </li>

                <li>
                    <Link href="/todo/3">3번</Link>
                </li>
            </ul>
        </>
    )
}

Todo.getInitialProps = async (ctx) => {
    const {
        query: { id = '' },
    } = ctx

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
    )

    const result = await response.json()
    console.log('fetch Complete!')
    return {todo: result}
}