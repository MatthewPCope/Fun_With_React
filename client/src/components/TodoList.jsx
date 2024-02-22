import React, { useState } from 'react'

function TodoList() {

    const [newTodo, setNewTodo] = useState("")
    const [TodoList, setTodoList] = useState("")


    const addTodo= () => {
        
    }

    return (
        <>
            <h1 className='text-center mt-5'>To-Do List</h1>
            <div id='container' >
                <div className=' p-4 form'>
                    <form className=''>
                        <div className='form-group'>
                            <label className="form-label">Add Todo:</label>
                            <input className='form-control' />

                            <button onClick={addTodo}></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TodoList