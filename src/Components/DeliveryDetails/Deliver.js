import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { CalculateContext } from '../../App';
import './Deliver.scss'
const Deliver = ({food}) => {
    // let [total,setTotal] = useContext(CalculateContext)
    const {image,name,Quantity,price,_id}=food
    const handleRemove = () => {
        fetch(`https://whispering-thicket-80285.herokuapp.com/delete/${_id}`,{
            method: 'DELETE'
        })

    }

    return (
        <div className='bg-dark ml-md-3 ml-0 mr-md-3 mr-0 rounded shadow'>
            <div className="d-flex justify-content-end align-items-end mt-3 mr-4 text-center">
                        <button className="mt-3" onClick={handleRemove}><FontAwesomeIcon icon={faTimes} className='text-danger text-right'></FontAwesomeIcon></button>
                        </div>
            <div className="d-flex  ml-md-5 ml-2 mr- mb-5">
                       
                        <img src={image} className='ml-md-2 ml-0 mb-3 img' alt="" srcset="" />
                        
                        <div className="d-flex flex-column ml-5 " style={{ lineHeight: '25px' }}>

                            <p className='text-white mt-3'>{name}</p>
                            <p className=' ml-0 text-white  '>{Quantity} Pice Order</p>
                            <p className=' ml-1 text-white'>${Quantity * parseInt(price)}</p>
                            <p className='text-muted ml-1'>Deliver Now</p>
                        </div>
                        
                    </div>
                    
        </div>
    );
};

export default Deliver;