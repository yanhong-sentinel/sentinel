import {useState} from react

function Button() {
    const[count, setCount] = useState(0)
    function buttonClicked() {
        setCount(count+1)
    }
    return (
        <>
            <p>Count:{count}</p>
            <button onClick={buttonClicked}>Click me!</button>
        </>
    )
}
