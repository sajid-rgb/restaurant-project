import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Resturant from '../Resturant/Resturant';
import DinnerFood from './DinnerFood';

const Dinner = () => {
    const [foods, setFoods] = useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(() => {
        fetch('https://whispering-thicket-80285.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                setIsLoading(false)
            })
    })
    const dinnerFood = foods.filter(fd=>fd.category === 'Dinner')
    return (
        <div className='container mx-auto mt-5 text-center'>
           {
                isLoading && <Loading></Loading>
            }
 

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