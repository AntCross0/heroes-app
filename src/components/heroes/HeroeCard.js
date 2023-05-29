import React from 'react';
import { Link } from 'react-router-dom';
import HeroeImage from './HeroeImage';


const HeroeCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    let img = HeroeImage({ id });
    return (
        <Link to={`/hero/${id}`} key={id}
            className=' bg-white transition-all group hover:scale-105 w-full min-[380px]:w-11/12 min-[480px]:w-[26rem] rounded drop-shadow-sm '>
            <div
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: 'top center',
                }}
                className='z-10 transition-all absolute h-full w-full invisible blur-sm delay-300 group-hover:blur-sm group-hover:visible group-hover:animate-[pulse_5s_ease-in-out_infinite]'>
            </div>
            <div className=' z-30 grid grid-cols-1 min-[380px]:grid-cols-2 min-[480px]:grid-cols-[70%,30%] '>
                <div className='relative transition-color z-30 flex flex-col p-4 w-full h-full justify-between'>
                    <div className='space-y-1'>
                        <p className=' text-indigo-700 font-semibold delay-300 group-hover:text-white'>{id}</p>
                        <h4 className=' font-bold text-2xl delay-300 group-hover:text-white'>{superhero}</h4>
                        <p className='font-semibold text-slate-600 delay-300 group-hover:text-white'>{alter_ego}</p>
                    </div>
                    <p className='z-30 justify-self-end font-medium text-slate-600 delay-300
                    group-hover:text-white'>{first_appearance}</p>
                </div>
                <div className='rounded z-30 justify-self-end'>
                    <img height={'180x'} alt={superhero} src={img} />
                </div>

            </div>
        </Link >
    )
}

export default HeroeCard
