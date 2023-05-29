import React, { useMemo } from 'react';
import getHeroByPublisher from '../../selectors/getHeroByPublisher';
import HeroeCard from './HeroeCard';

const HeroesList = ({ publisher }) => {


    const heroes = useMemo(() => (getHeroByPublisher(publisher)), [publisher]);

    return (
        <div className='transition-transform ease-in-out min-max:w-4/5 grid grid-flow-row grid-cols-1 md:min-[900px]:grid-cols-2  lg:min-[1320px]:grid-cols-3  
        gap-2 justify-items-center items-center mx-auto py-4'>
            {
                heroes.map(heroe => (

                    <HeroeCard key={heroe.id} {...heroe} />

                ))
            }
        </div>
    )
}

export default HeroesList
