import React, { createContext, useState } from 'react';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css';
//context api
//step 1 - call create context with a default value
//step - 2 - set a variable of the context with uppercase 
//step -3 make sure you export the context to use it in other places
//step - 4 - wrap you child content using RingContext.provider
//step 5 - provide a value
//6 - to consume the context from child compo
// 7. use context hook and need to pass the context name 
export const RingContext = createContext('ring')
const Grandpa = () => {
    // const house = 7;
    //prothome sudhu 7 diye korbo erpr dynamic bhabe nicher moto krbo
    const [house, sethouse] = useState(1);

    const ornament = 'Diamond Ring';
    const ornament2 = 'gold ring';
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        sethouse(newHouseCount);
    }
    //context korle kono props pass kora lagbe na 
    return (
        // <RingContext.Provider value='alur-ring'>
        //chaile hardcoded er bodole evabe dynamic way teo pathaono jae
        // <RingContext.Provider value={ornament2}> 

        // abr multiple value evabe array er maddhomeo pathano jae 
        // <RingContext.Provider value={[ornament2, house]}>

        //abr function o pass kora jae jemon setHouse pass korlam eta ekta function
        <RingContext.Provider value={[house, sethouse]}>
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
        </RingContext.Provider>
    );
};

export default Grandpa;