import React from 'react';

const List = () => {

    const developers = ['web' , 'full stack', 'laravel']

    const cars = [
    {id: 1001, brand: 'Ford'},
    {id: 1002, brand: 'BMW'},
    {id: 1003, brand: 'Audi'}
  ];


    return (
        <div>
            <h1>list of developer</h1>

            <ul>
                {/* {developers.map((dev) => <li>my name is {dev}</li>)} */}
                {/* {developers} */}
                {/* {developers.map((dev) => <li>your name {dev}</li>)} */}
                {developers.map((dev) => <li>i am a {dev}</li>)}
            </ul>

            

            <ul>
                {cars.map((car) => <li key={car.id}>i am a {car.brand}</li>)}
            </ul>
            
        </div>
    );
};

export default List;