import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';

const Aunty = () => {
    // {house} ei props ta shorae fellam aunty er vitor theke 
    // const ring = useContext(RingContext);
    const [house, sethouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        sethouse(newHouseCount);
    }
    return (
        <div>
            <h4>Aunty</h4>
            <p>house: {house}</p>
            {/* <p><small>Ring: {ring} </small></p> */}
            <button onClick={handleHouseIncrease}> anuty magic</button>

        </div>
    );
};

export default Aunty;