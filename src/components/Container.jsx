import React from 'react';

const Container = (props) => {
    return (
        <div className='w-[87.7%] mx-auto my-2'>
            {props.children}
        </div>
    );
};

export default Container;