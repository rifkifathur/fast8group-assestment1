import React from 'react';

const Header = (props) => {
    return (
        <header className='bg-white my-4 p-4'>
            {props.children}
        </header>
    );
};

export default Header;