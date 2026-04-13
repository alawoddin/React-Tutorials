import React, { useState } from 'react';

const Textarea = () => {

    const [mytxt, setMytxt] = useState("");
    const [result, setResult] = useState("");

    function handlechange(e) {
        setMytxt(e.target.value);
    }

    function onsubmit(e) {
        e.preventDefault();
         setResult(mytxt); 
    }

    return (
        <div>
            <form onSubmit={onsubmit}>
                <textarea
                    value={mytxt}
                    onChange={handlechange}
                ></textarea>

                <button type="submit">click</button>
            </form>

            <p>Current value : {mytxt}</p>
            <p>Current value : {result}</p>
        </div>
    );
};

export default Textarea;