import { useState } from "react"

export default function TodoForm({addTodo}) {
    
    const [newTodo, setNewTodo] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        if(newTodo === "") return
        addTodo(newTodo)
        setNewTodo("")
    }




    return (
        <>
            <form onSubmit={submitHandler} className=''>
                <div className='form-group'>
                    <label htmlFor="todo"className="form-label">Add Todo:</label>
                    <input value={newTodo} 
                        onChange={e => setNewTodo(e.target.value)} 
                        type="text" 
                        id="todo" 
                        className='form-control' />
                    <div className='text-center mt-4'>
                    <button>Add</button>
                    </div>
                </div>
            </form>
        </>
    )
}
