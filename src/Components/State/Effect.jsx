import React, { useEffect } from 'react';

const Effect = () => {
    useEffect(() => {
        console.log("Component Loaded");
    } , []);
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Effect;