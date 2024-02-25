import TodoItem from "./TodoItem"

export default function TodoTable({todos, toggleTodo, deleleTodo}) {

    
    return (
        <>
            <ul>
                {todos.length === 0 && "No todos"}
                    {todos.map(todo => {
                        return (
                        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleleTodo={deleleTodo}/>
                        )
                    })}
            </ul>
        </>
    )
}



