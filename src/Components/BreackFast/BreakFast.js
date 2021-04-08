import React, { useEffect, useState } from 'react';
import Resturant from '../Resturant/Resturant';
import BreakFastFood from './BreakFastFood';

const BreakFast = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    },[])
    const breakFastFood = foods.filter(fd=>fd.category === 'Breakfast')
    return (
        <div className=''>
            

            <div className='row container mx-auto mt-4'>

                {
                    breakFastFood.map(food => <BreakFastFood key={food._id} food={food} ></BreakFastFood>)
                }
                
            </div>
            <Resturant></Resturant>
        </div>
    );
};

export default BreakFast;