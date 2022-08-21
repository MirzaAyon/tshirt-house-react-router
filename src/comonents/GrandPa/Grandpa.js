import React from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css';

const Grandpa = () => {
    return (
        <div className='grandpa' style={{ display: 'flex' }}>
            {/* <h2>Grand Pa</h2> */}
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>

        </div>
    );
};

export default Grandpa;