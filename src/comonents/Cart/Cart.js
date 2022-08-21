import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options
    //1.element variable
    let command;
    if (cart.length === 0) {
        command = <p>Please add atleast one  items</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    } else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h2>Iten selected: {cart.length}</h2>
            {command}
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}  >X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;