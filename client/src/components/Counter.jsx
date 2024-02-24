
import { signal } from "@preact/signals-react"

const count = signal(0);


function Counter() {
    return (
        <>
            <h1 className="text-center mt-5"> Signal Counter</h1>
            <div className="form">
                <div className="text-center p-4">
                    <button onClick={() => count.value++}>
                        Value: {count}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Counter