import React from 'react';
import { Link } from 'react-router-dom';

const HomePageCheckOut = () => {
    return (
        <div className="text-center" style={{height:'100vh',backgroundColor:'white'}}>
            <h5 className="text-center text-muted">
                food is not available
            </h5>
            <Link to="/home" className="text-center">
                Go Home
            </Link>
        </div>
    );
};

export default HomePageCheckOut;