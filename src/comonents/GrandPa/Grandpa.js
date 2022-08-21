import React from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css';

const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa' style={{ display: 'flex' }}>
            <h4>GrandPa</h4>
            {/* <h2>Grand Pa</h2> */}
            <div style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>
            {/* house take shobar jnno use korte chai tai house ke pathae dilam */}

        </div>
    );
};

export default Grandpa;