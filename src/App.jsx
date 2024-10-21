import "./App.css"
import Posts from "./components/Posts"

function App() {
    return (
        <>
            <h1>React Core Concepts</h1>
            <ul className='list-disc text-left ml-12 my-6'>
                <li>Components</li>
                <li>JSX</li>
                <li>Props</li>
                <li>Event Handler</li>
                <li>State</li>
                <li>Load Data</li>
            </ul>
            <hr />

            {/* TODO - Post component */}
            <Posts></Posts>
        </>
    )
}

export default App
