import React from 'react';
import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
    return (
        <div className='bg-slate-50 rounded text-slate-800 px-4 py-2'>
            <span className='font-bold text-4xl mt-2 mb-4'>Dc Screen</span>
            <HeroesList publisher={'DC Comics'} />
        </div>
    )
}

export default DcScreen
