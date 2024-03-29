import React, { useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import TodoTable from './TodoTable'

function TodoList() {

    
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    const addTodo = (title) => {
        setTodos((currentTodos ) => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false}
            ]
        })
    }
    const toggleTodo = (id, completed) => {
        setTodos(currentTodos => {
            return(
                currentTodos.map(todo => {
                    if (todo.id === id)  {
                        return { ...todo, completed}
                    }
                    return todo
                })
            )
        })
    }

    const deleteTodo = (id) => {
        setTodos(currentTodos => {
            return(
                currentTodos.filter(todo => todo.id !== id)
            )
        })
    }



    return (
        <>
            <h1 className='text-center mt-5'>To-Do List</h1>
            <div >
                <div className=' p-4 form'>
                    <TodoForm addTodo={addTodo}/>
                    <TodoTable todos= {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                </div>
            </div>
        </>
    )
}


export default TodoList
