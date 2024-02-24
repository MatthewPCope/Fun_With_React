import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {

    
    const [todos, setTodos] = useState([])

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
            <div id='container' >
                <div className=' p-4 form'>
                    <TodoForm addTodo={addTodo}/>
                    
                </div>
            </div>
        </>
    )
}


export default TodoList
