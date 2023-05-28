import React from 'react';
import getHeroByPublisher from '../../selectors/getHeroByPublisher';
import HeroeCard from './HeroeCard';

const HeroesList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher);

    return (
        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,26rem)] gap-2'>
            {
                heroes.map(heroe => (

                    <HeroeCard key={heroe.id} {...heroe} />

                ))
            }
        </div>
    )
}

export default HeroesList
