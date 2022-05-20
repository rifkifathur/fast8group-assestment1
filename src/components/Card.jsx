import React from 'react';

const Card = (props) => {
    return (
        <div className='bg-white w-auto lg:w-72 h-auto rounded-md shadow-sm shadow-gray-600 mx-auto my-2 lg:mr-3'>
            {props.children}
        </div>
    );
};

export default Card;