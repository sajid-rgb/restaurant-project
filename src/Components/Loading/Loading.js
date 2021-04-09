import React from 'react';

const Loading = () => {
    return (
        <div>
             <div class="spinner-grow text-white" style={{height:'10rem',width:'10rem'}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;