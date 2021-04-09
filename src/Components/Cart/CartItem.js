import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartItem = ({carts}) => {
    const {name,price,Quantity,_id} = carts;
    const totalPrice = Quantity * parseInt(price);
    const handleRemove = () => {
        fetch(`https://whispering-thicket-80285.herokuapp.com/delete/${_id}`,{
            method: 'DELETE'
        })

    }
    return (
        <div>
            <tr className='d-flex justify-content-between'>
                <td className='w-100 '>{name}</td>
                <td  className='w-100 '>{Quantity}</td>
                <td  className='w-50 '>{totalPrice} <FontAwesomeIcon icon={faTimes} className='text-danger ml-4' style={{cursor:'pointer'}} onClick={handleRemove}/></td>
            </tr>
        </div>
    );
};

export default CartItem;