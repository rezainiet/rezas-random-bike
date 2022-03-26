import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, id, picture } = props.product;
    return (
        <div className='product-container'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <button className="btn-cart">
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;