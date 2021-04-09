import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Resturant from '../Resturant/Resturant';
import BreakFastFood from './BreakFastFood';

const BreakFast = () => {
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
    const breakFastFood = foods.filter(fd=>fd.category === 'Breakfast')
    return (
        <div className='container mx-auto mt-5 text-center'>
             {
                isLoading && <Loading></Loading>
            }


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