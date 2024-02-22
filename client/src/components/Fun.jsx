
import { useState } from 'react'

function Fun() {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount( count + 1 )
    }

    return (
        <div>
            <h1>What's up, I'm Matt</h1>
            <p>The count is {count}</p>
            <button onClick = {increaseCount} >Click Me</button>
        </div>
    )
}

export default Fun
