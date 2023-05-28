import React from 'react'
import HeroesList from '../heroes/HeroesList'

const MarvelScreen = () => {
    return (
        <div className='bg-slate-50 rounded text-slate-800 px-4 py-2'>
            <h1 className='font-bold text-4xl mt-2 mb-4'>Marvel Screen</h1>
            <HeroesList publisher={'Marvel Comics'} />
        </div>
    )
}

export default MarvelScreen