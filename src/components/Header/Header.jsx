import React from 'react';

const Header = () => {
    return (
        <div className='h-[80px] bg-[#1c2b35] flex justify-between'>
            <div className='pr-8 pt-5 mx-8'><img src="../../../images/Logo.svg" alt="" /></div>
            <div className='text-white'>
            <ul className='flex space-x-4 pr-8 pt-5'>
                <li><a href="/shop">shop</a></li>
                <li><a href="/order">order</a></li>
                <li><a href="/inventory"></a>Inventory</li>
                <li><a href="/login"></a>Login</li>
            </ul>
            </div>
        </div>
    );
};

export default Header;