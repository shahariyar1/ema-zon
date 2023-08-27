import React, { useEffect, useState } from 'react';
import './/Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handleAddToCart =(product) => {

        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className="shop-container grid grid-cols-12">
            <div className="product-container flex flex-wrap col-span-9 ">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container col-span-3">
                <h4>Order Summary</h4>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>

    );
};

export default Shop;