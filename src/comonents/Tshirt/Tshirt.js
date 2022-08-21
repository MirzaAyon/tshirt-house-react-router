import React from 'react';
import './Tshirt.css';

const Tshirt = ({ handleAddToCart, tshirt }) => {

    const { name, picture, price } = tshirt;
    return (
        <div className='t-shirt' >
            <img src={picture} alt="" />
            <h4> {name}</h4>
            <p>price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirt;