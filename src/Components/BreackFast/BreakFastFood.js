import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BreakFastFood = ({food}) => {
    const {name,image,price,_id}= food
    const [isFavorite,setIsFavorite] = useState(false)
    const handleFavorite = ()=>{
        setIsFavorite(!isFavorite)

    }
    return (
<div className='col-lg-4 col-md-6 mt-3 mb-4 '>

            
        <Card className='text-center align-items-center justify-content-center'>
        

            <Card.Header className='card-header d-flex align-items-center justify-content-center bg-dark' >
            <Link to={`/foods/${_id}`} style={{textDecoration:'none'}}>
            <Card.Img src={image} ></Card.Img>
            </Link>
            </Card.Header>
            <Card.Body className='mt-2 text-dark' style={{height: '80px',textAlign: 'center'}}>
                <div className="d-flex text-center justify-content-center">
                <Link to={`/foods/${_id}`} style={{textDecoration:'none'}} className="text-dark">
                <Card.Title style={{fontSize: '16px'}}>{name}</Card.Title>
                </Link>
                {
                isFavorite ? <FontAwesomeIcon icon={faHeart} className='text-danger mt-0 ml-3 ' style={{fontSize:'20px',cursor: 'pointer' }} onClick={handleFavorite}></FontAwesomeIcon>:<FontAwesomeIcon icon={faHeart} className='text-dark mt-0 ml-3 ' style={{fontSize:'20px' ,cursor: 'pointer'}} onClick={handleFavorite}></FontAwesomeIcon>
            }
                </div>
                <Card.Subtitle className='mr-3'>${price}</Card.Subtitle>
                
            </Card.Body>
             
            <div className="d-flex">
            <Link to={`/foods/${_id}`} style={{textDecoration:'none'}}>
            <button className='btn btn-primary w-100 mb-3 mt-0' >Order Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </Link> 
            </div>
        </Card>
       
            
        </div>
    );
};

export default BreakFastFood;