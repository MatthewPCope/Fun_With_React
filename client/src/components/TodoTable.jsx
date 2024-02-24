
export default function TodoTable() {
    return (
        <ul>
                        {todos.length === 0 && "No todos"}
                        {todos.map(todo => {
                            return (
                            <li key={todo.id}>
                                <label>{todo.title}
                                    <input type="checkbox" checked={todo.completed}
                                    onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                                </label>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </li>
                            )
                        })}
                    </ul>
    
    )
}
