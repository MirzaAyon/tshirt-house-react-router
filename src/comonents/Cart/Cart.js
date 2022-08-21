import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options
    //1.element variable
    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Please add atleast one</h5>
            <p>You have offers</p>
        </div>
    }
    else if (cart.length === 1) {
        command = <p>Please add more </p>
    } else {
        command = <p><small>Thanks for adding item</small></p>
    }
    //2.Ternary operator
    //3.&& operator er use and (shorthand)
    //or ||
    return (
        <div>
            <h2>Iten selected: {cart.length}</h2>

            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}  >X</button>
                </p>)
            }
            {
                cart.length === 0 || <p className='orange'>Yaea! are buying</p>
            }
            {cart.length === 3 && <div
                className='orange'
            >
                <h3>Trigonal</h3>
                <p>Gift for 3 people</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;