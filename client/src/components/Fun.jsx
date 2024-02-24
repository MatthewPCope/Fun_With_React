
import { useState } from 'react'

function Fun() {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount( count + 1 )
    }

    return (
        <>
            <h1 className='text-center mt-5'>Counter</h1>
            <div className='form'>
                <div className='text-center p-4'>
                    <p>The count is {count}</p>
                    <button onClick = {increaseCount} >Click Me</button>
                </div>
            </div>
        </>
    )
}

export default Fun
