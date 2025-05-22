import { useState, useEffect } from 'react';
function Counter(props) {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(5);

    useEffect(() => {
        console.log('inside the effect');
    }, [count])

    
    useEffect(() => {
        console.log('age changed');
    }, [age]) 

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)} >Increment</button>
            <button onClick={() => setAge(age => age + 5)} >Increment Age</button>
            <div>
                {count}
            </div>
            <div>
                Age: {age}
            </div>
        </div>
    )
}

export default Counter;