import React from 'react';
import Myself from '../Myself/Myself.js'
import Brother from '../Brother/Brother.js'
import Sister from '../Sister/Sister.js'

const Father = ({ house, ornament }) => {
    return (
        <div>
            {/* grand father theke je house ta pelam ta father e niye ashlam */}
            <h2>Father</h2>
            <p>house: {house}</p>
            <div style={{ display: 'flex' }} >
                <h3>GrandPa</h3>
                <Myself house={house} ornament={ornament}></Myself>
                <Brother house={house} ></Brother>
                <Sister house={house}></Sister>
            </div>

        </div >
    );
};

export default Father;