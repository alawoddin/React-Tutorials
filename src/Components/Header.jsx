/* eslint-disable react-hooks/static-components */
import React from 'react';

const Header = () => {

    const name = "alawoddin";

    function Greet() {
        return (
            <h1 style={{ color:  "green"}}>hello {name}</h1>
        )
    }

    function Car() {
        return (
            <h1>hello world</h1>

        )
    }
    return (
            <>

            <Car />
            <Greet />
            </>
    );
};

export default Header;