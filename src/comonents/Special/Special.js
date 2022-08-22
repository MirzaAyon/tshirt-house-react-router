import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';

const Special = ({ ornament }) => {
    // const ring = useContext(RingContext)
    // const [ornament2, house] = useContext(RingContext)
    const [house, sethouse] = useContext(RingContext)
    //grandpa te export kore ekhane import korlam
    return (
        <div>
            <h5>Special</h5>
            <p><small>Gift: {ornament}</small></p>
            {/* <p><small>Gift: {ring}</small></p> */}
            {/* <p><small>Gift: {ornament2}</small></p> */}
            <p><small>House: {house}</small></p>
            {/* first gift manually 2nd gift with context api  */}
            <button onClick={() => sethouse(house+1)}>Buy a house</button>
            {/* onclick e pm pathale amra arrow func dei  */}
        </div>
    );
};

export default Special;
//dada first e father ke erpr father pathaise myself ke and myself pathaise special one ke 
//kintu eta secret fush kore dichche