import React from 'react';

const Main = (props) => {
    return (
        <div className='w-auto md:w-[83%] mx-auto md:mx-52'>
            {props.children}
        </div>
    );
};

export default Main;