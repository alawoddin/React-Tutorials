import  { useState } from 'react';

const Main = () => {

    const [count , setCount] = useState(0);

    const [color , setColor] = useState("red");


    return (

            <>

        <h1 style={{ color: color}}>my favorite color is {color}</h1>

        <button onClick={() => setColor("blue")}>click blue</button>

        <button onClick={() => setColor("green")}>click green</button>

        <div>

            <h1>{count}</h1>

            <button onClick={() => setCount(count +1)}>Inrease</button>

        </div>

        </>

    );
};

export default Main;