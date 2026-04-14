import  { useState } from 'react';

const Main = () => {

    const [count , setCount] = useState(0);


    return (
        <div>

            <h1>{count}</h1>

            <button onClick={() => setCount(count +1)}>Inrease</button>

        </div>
    );
};

export default Main;