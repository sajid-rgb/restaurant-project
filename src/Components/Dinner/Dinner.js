import React, { useEffect, useState } from 'react';
import Resturant from '../Resturant/Resturant';
import DinnerFood from './DinnerFood';

const Dinner = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    },[])
    const dinnerFood = foods.filter(fd=>fd.category === 'Dinner')
    return (
        <div className='container'>
            

        <div className='row container mx-auto mt-4'>

            {
                dinnerFood.map(food => <DinnerFood key={food._id} food={food} ></DinnerFood>)
            }
            <Resturant></Resturant>
        </div>
    </div>
    );
};

export default Dinner;