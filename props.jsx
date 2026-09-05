{/* a for age, n for name
*/}
function Student(prop) {
    return (
        <>
            <p>{prop.n} is {prop.a} years old.</p>
        </>
    )
}

function App() {
    return (
        <Student n="Alex" a={15}/>
    )
}