
import { signal } from "@preact/signals-react"

const count = signal(0);


function Counter() {
    return (
        <button onClick={() => count.value++}>
            Value: {count}
        </button>
    );
}

export default Counter