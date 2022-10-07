import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const {name,img,seller,price,ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p className='product-name'><small>Price:{price}</small></p>
            <p className='product-name'><small>Seller:{seller}</small></p>
            <p className='product-name'><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='button-cart'>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};

export default Product;