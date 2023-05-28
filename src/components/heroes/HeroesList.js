import React, { useMemo } from 'react';
import getHeroByPublisher from '../../selectors/getHeroByPublisher';
import HeroeCard from './HeroeCard';

const HeroesList = ({ publisher }) => {


    const heroes = useMemo(() => (getHeroByPublisher(publisher)), [publisher]);

    return (
        <div className='relative w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,26rem)] 
        gap-x-4 gap-y-2 mx-auto'>
            {
                heroes.map(heroe => (

                    <HeroeCard key={heroe.id} {...heroe} />

                ))
            }
        </div>
    )
}

export default HeroesList
