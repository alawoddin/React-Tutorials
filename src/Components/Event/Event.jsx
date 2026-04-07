import React from 'react';

const Event = () => {

    const clickbutton = () => {
        console.log("the button is clicked");
    }

    const inputchange = (e) => {
        console.log("the input value is " + e.target.value);
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        alert("the form is submitted");
    }


    const  mousehere = () => {
        console.log("mouse here");
    }

    const  keydown = () => {
        console.log("key down");
    }

    const ClickButton = () => {
        console.log("the button is clicked");
    }



    return (
        <div>
            <button onClick={clickbutton}>click me </button>

            <input type="text" name='name' onChange={inputchange} />

            {/* <button onMouseDown={() => console.log("mouse here")}>check</button> */}
            <button onMouseDown={mousehere}>check</button>

            {/* <input type="text" onKeyDown={() => console.log("key down")} /> */}
            <input type='text' onKeyDown={keydown} />

            {/* <button onClick={ () => alert("why you click me")}>click me </button> */}

            <button onClick={ClickButton}>click me </button>

            <form onSubmit={handlesubmit}>
                <button   type='submit'>send</button>
            </form>
        </div>
    );
};

export default Event;