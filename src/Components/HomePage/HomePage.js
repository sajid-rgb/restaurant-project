import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/bg/haydrabadi.jpg'
import nachos from '../../images/bg/nachos.jpg'
import spanish from '../../images/bg/spanish.jpg'
import './HomePage.scss'
const HomePage = () => {
    return (
        <Carousel>
          <Carousel.Item>
          <div className="row container bg-success mx-auto mb-3 rounded offer-food">
            
            <div className="col-md-5 d-flex flex-column align-content-center justify-content-center">
               <h3 className="food-name ml-md-4 mt-3 mt-md-0">
                   CHICKEN BIRIYANI
               </h3>
               <h3 className="text-left ml-md-4">20% Off</h3>
               <h2 className="text-warning ml-md-4">$<del className='ml-2'>24</del><span className='text-white ml-2'>14</span></h2>
               <Link to="/orderHomePage" className="text-white">
               <button className='btn btn-primary w-50 ml-md-4'>Order Now</button>
               </Link>
            </div>
            <div className="col-md-7">
                 <img src={banner} className='img-fluid w-100 mt-3 mb-3 rounded' alt="" srcset=""/>
            </div>
        </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="row container bg-success mx-auto mb-3 rounded offer-food">
            
            <div className="col-md-5 d-flex flex-column align-content-center justify-content-center">
               <h3 className=" ml-md-4 mt-3 mt-md-0 food-name">
                   CANADIAN NACHOS
               </h3>
               <h3 className="text-left ml-md-4 ">24 hours available</h3>
               <h2 className="text-warning ml-md-4">$5</h2>
               <Link to="/orderHomePage" className="text-white">
               <button className='btn btn-primary w-50 ml-md-4'>Order Now</button>
               </Link>
            </div>
            <div className="col-md-7">
                 <img src={nachos} className='img-fluid w-100 mt-3 mb-3 rounded' alt="" srcset=""/>
            </div>
        </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="row  container bg-success mx-auto mb-3 rounded offer-food">
            
            <div className="col-md-5 d-flex flex-column align-content-center justify-content-center">
               <h3 className="food-name ml-md-4 mt-3 mt-md-0">
                   SPANISH THALI
               </h3>
               <h3 className="text-left ml-md-4">Buy one get one free</h3>
               <h2 className="text-warning ml-md-4">$14</h2>
               <Link to="/orderHomePage" className="text-white">
               <button className='btn btn-primary w-50 ml-md-4'>Order Now</button>
               </Link>
            </div>
            <div className="col-md-7">
                 <img src={spanish} className='img-fluid w-100 mt-3 mb-3 rounded' alt="" srcset=""/>
            </div>
        </div>
          </Carousel.Item>
        </Carousel>
    );
};

export default HomePage;