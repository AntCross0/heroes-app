import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import getHeroById from '../../selectors/getHeroById';
import HeroeImage from './HeroeImage';

const HeroesScreen = () => {

    const { heroId } = useParams();
    const hero = useMemo(() => (getHeroById(heroId)), [heroId]);

    if (!hero) {
        return <Navigate to='/' replace />
    }
    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero[0];


    const HandleClick = () => {
        //go back
        return <Navigate to={-1} replace />
    }



    let img = HeroeImage({ id });
    return (
        <div className='transition-all delay-300 relative w-full h-[90vh] flex items-center'>
            <div className='group relative transition-all bg-slate-50 rounded text-slate-800 px-4 py-2 
            w-2/4 h-2/5 mx-auto '>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col' >
                        <h1 className='font-bold text-6xl mt-2 mb-4'>{superhero}</h1>
                        <h3 className='font-medium text-cyan-600'>{publisher}</h3>
                        <div className='space-y-2 mt-8'>
                            <p className='font-medium text-slate-400'>Real name: <span className='font-semibold text-slate-800'>{alter_ego}</span></p>
                            <p className='font-medium text-slate-400'>First Comic: <span className='font-semibold text-slate-800'>{first_appearance}</span> </p>
                            <p className='font-medium text-slate-400'>Other names: <span className='font-semibold text-slate-800'>{characters}</span> </p>
                        </div>
                        <button onClick={HandleClick} className='transition-color absolute bottom-4 p-2 bg-sky-400 w-32 rounded text-white  hover:bg-sky-500 font-semibold'>Go Back</button>
                    </div>
                    <img className=' relative -top-14 right-4 translate-x-4 transition-transform hover:scale-110 w-[280px] h-auto rounded-md shadow-md' alt={superhero} src={img} />
                </div>
            </div >
        </div>
    )
}

export default HeroesScreen
