import React from 'react';

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping = 0 ;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping +tax;

    return (
        <div className='cart bg-[#f6cf94] p-[25px] space-y-6 sticky mt-0'>
            <h4>Order Summary</h4>
                <p>Selected items: {cart.length}</p>
                <p>Toatl Price: {totalPrice}</p>
                <p>Total Shipping : {totalShipping}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <h6>Grand total :{grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;