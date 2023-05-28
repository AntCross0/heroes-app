import React from 'react';
import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
    return (
        <div className='bg-slate-50 rounded text-slate-800 p-4'>
            <h1 className='font-bold text-4xl my-2'>DC Screen</h1>
            <HeroesList publisher={'DC Comics'} />
        </div>
    )
}

export default DcScreen
