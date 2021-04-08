import React from 'react';
import './Resturant.scss'
import { Card } from 'react-bootstrap';
import chef from '../../images/bg/chef.jpg'
import waiter from '../../images/bg/waiter.jpg'
import delivery from '../../images/bg/diliveryman.jpg'
const Resturant = () => {
    return (
        <div>
           <h3 className='text-center mt-5 choice'>Why You <span className='choice-us'>Choice</span> Us?</h3> 

              <h3 className='text-center resturant'>No. 1 Restaurant in the town. We serve world's best food.</h3>
              <hr style={{backgroundColor:'black',width:'55%'}}/>
           <div className="row mb-3 container mx-auto mt-5">
            <div className='col-md-4 shadow rounded'>
            <Card  style={{height:'100%'}}>
               <Card.Img src={chef} className='w-100 mt-0' style={{height:'220px'}}></Card.Img>
               
               <Card.Body>
               <Card.Title>
                   Healthy Cooking
               </Card.Title>
               <Card.Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos deleniti magnam enim temporibus at delectus quis nesciunt reprehenderit porro.
               </Card.Text>
               </Card.Body>
           </Card>
            </div>
           <div className="col-md-4 shadow rounded mt-md-0 mt-3">
           <Card className=' ml-0' style={{height:'100%'}}>
              
              <Card.Img src={waiter} className='w-100 mt-0' style={{height:'220px'}}></Card.Img>
               <Card.Body >
               <Card.Title>
                   Free Environment
               </Card.Title>
               <Card.Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos deleniti magnam enim temporibus at delectus quis nesciunt reprehenderit porro.
               </Card.Text>
               </Card.Body>
              
           </Card>
           </div>
            <div className='col-md-4 shadow rounded mt-md-0 mt-3'>
            <Card  style={{height:'100%'}}>
               <Card.Img src={delivery} className='w-100' style={{height:'220px'}}></Card.Img>
               <Card.Body>
               <Card.Title>
                   Quick Delivery
               </Card.Title>
               <Card.Text>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos deleniti magnam enim temporibus at delectus quis nesciunt reprehenderit porro.
               </Card.Text>
               </Card.Body>
           </Card>
            </div>
           </div>
           </div>
        
    );
};

export default Resturant;