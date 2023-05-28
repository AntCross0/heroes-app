import React from 'react';
import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
    return (
        <div className=''>
            <h1>DcScreen</h1>
            <HeroesList publisher={"DC Comics"} />
        </div>
    )
}

export default DcScreen
