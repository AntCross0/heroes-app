import React from 'react'
import HeroesList from '../heroes/HeroesList'

const MarvelScreen = () => {
    return (
        <div className='bg-slate-50 rounded text-slate-800 p-4'>
            <h1 className='font-bold text-4xl my-2'>Marvel Screen</h1>
            <div className='mx-auto'>

                <HeroesList publisher={'Marvel Comics'} />
            </div>
        </div>
    )
}

export default MarvelScreen