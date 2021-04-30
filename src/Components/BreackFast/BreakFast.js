import React, { useContext, useEffect, useState } from 'react';
import { HideContext } from '../../App';
import Loading from '../Loading/Loading';
import Resturant from '../Resturant/Resturant';
import BreakFastFood from './BreakFastFood';

const BreakFast = () => {
    const [foods, setFoods] = useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [isHide,setIsHide] = useContext(HideContext)
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
                    isHide &&
                    breakFastFood.map(food => <BreakFastFood key={food._id} food={food} ></BreakFastFood>)
                }
                
            </div>
            <Resturant></Resturant>
        </div>
    );
};

export default BreakFast;