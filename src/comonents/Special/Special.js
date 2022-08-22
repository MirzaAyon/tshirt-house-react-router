import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';

const Special = ({ ornament }) => {
    const ring = useContext(RingContext)
    //grandpa te export kore ekhane import korlam
    return (
        <div>
            <h5>Special</h5>
            <p><small>Gift: {ornament}</small></p>
            <p><small>Gift: {ring}</small></p>
            {/* first gift manually 2nd gift with context api  */}
        </div>
    );
};

export default Special;
//dada first e father ke erpr father pathaise myself ke and myself pathaise special one ke 
//kintu eta secret fush kore dichche