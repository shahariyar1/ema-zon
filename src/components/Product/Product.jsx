import React from 'react';

const Product = (props) => {
    const {name,img,seller,price,ratings,quantity} = props.product
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product w-[300px] h-[510px] border border-gray-400 mt-5 mx-1 rounded-md relative flex flex-col'>
            <img className='w-[286px] h-[286px] border mx-1 mb-2 mt-2 rounded-md' src={img} alt="" />
            <h3 className='font-semibold mx-3 mt-3'>{name}</h3>
            <p className='mx-3 mt-3'>Price : ${price}</p>
            <p className='mx-3 mt-3'>Manufacturer:{seller}</p>
            <p className='mx-3 mt-3'>Rating :{ratings} starts</p>
            <button onClick={()=> handleAddToCart(props.product)} className="btn bg-orange-300 w-full absolute rounded-md">Add to Cart</button>
          
        </div>
        
    );
};

export default Product;