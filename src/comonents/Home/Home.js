import React from 'react';
import useTshirt from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirt();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {/* <h3>{tshirts.length}</h3> */}
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;