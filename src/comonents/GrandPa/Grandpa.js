import React, { useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css';

const Grandpa = () => {
    // const house = 7;
    //prothome sudhu 7 diye korbo erpr dynamic bhabe nicher moto krbo
    const [house, sethouse] = useState(1);

    const ornament = 'Diamond Ring';
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        sethouse(newHouseCount);
    }
    return (
        <div className='grandpa' >
            <h4>GrandPa</h4>

            <p>House: {house}

                <button onClick={handleBuyAHouse}
                >Buy a house</button>

            </p>
            {/* <h2>Grand Pa</h2> */}
            <section style={{ display: 'flex' }}>
                <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
            {/* house take shobar jnno use korte chai tai house ke pathae dilam */}

        </div>
    );
};

export default Grandpa;