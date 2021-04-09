import React from 'react';

const LoadingTable = () => {
    return (
        <div>
           <div className="container text-center ">
                <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
             </button>
            </div> 
        </div>
    );
};

export default LoadingTable;