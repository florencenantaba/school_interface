//useState
import {useState} from 'react'

function Counter(){
    // 2. Internal State
    const [counter, setCounter] = useState(0);
    // const [dummyState, setDummyState] = useState();

        // 3. Business Logic 
        function increment(){
            setCounter(counter + 1);
        }

        // 3. Business Logic 
        function decrement(){
            setCounter(counter - 1);
        }

        //4. Fetchers
        async function getClubs(){
            let response = await Fetch(
                'https://schoolapi-op58.onrender.com/v1/clubs',
            )
            let clubs = await response.json();
            console.log(clubs);
        }


    // 1. Content to be rendered
    return (
        // JSX = JS + HTML + XML
        <div>
            <h1>Counter: {counter} </h1>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter;
