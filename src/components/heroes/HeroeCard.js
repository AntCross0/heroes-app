import React from 'react';
import SpiderMan from '../../img/marvel-spider.jpg';
import CaptainAmerica from '../../img/marvel-captain.jpg';
import IronMan from '../../img/marvel-iron.jpg';
import Thor from '../../img/marvel-thor.jpg';
import Hulk from '../../img/marvel-hulk.jpg';
import Wolverine from '../../img/marvel-wolverine.jpg';
import Daredevil from '../../img/marvel-daredevil.jpg';
import Hawkeye from '../../img/marvel-hawkeye.jpg';
import Cyclops from '../../img/marvel-cyclops.jpg';
import SilverSurfer from '../../img/marvel-silver.jpg';
import Batman from '../../img/dc-batman.jpg';
import Superman from '../../img/dc-superman.jpg';
import Flash from '../../img/dc-flash.jpg';
import GreenLantern from '../../img/dc-green.jpg';
import GreenArrow from '../../img/dc-arrow.jpg';
import WonderWoman from '../../img/dc-wonder.jpg';
import MartianManhunter from '../../img/dc-martian.jpg';
import RobinNightwing from '../../img/dc-robin.jpg';
import BlueBeetle from '../../img/dc-blue.jpg';
import BlackCanary from '../../img/dc-black.jpg';
import { Link } from 'react-router-dom';

const imgarr = [
    SpiderMan,
    CaptainAmerica,
    IronMan,
    Thor,
    Hulk,
    Wolverine,
    Daredevil,
    Hawkeye,
    Cyclops,
    SilverSurfer,
    Batman,
    Superman,
    Flash,
    GreenLantern,
    GreenArrow,
    WonderWoman,
    MartianManhunter,
    RobinNightwing,
    BlueBeetle,
    BlackCanary
]

const HeroeCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    let img = imgarr.find(hero => hero.includes(id));
    return (
        <Link to={`/hero/${id}`} key={id}
            className=' bg-white transition-all group hover:scale-105 w-full min-[380px]:w-11/12 min-[480px]:w-[26rem] rounded drop-shadow-sm  overflow-hidden'>
            <div
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: 'top center',
                }}
                className='z-10 transition-all absolute h-full w-full invisible blur-sm delay-500 group-hover:blur-sm group-hover:visible group-hover:animate-[pulse_10s_ease-in-out_infinite]'>
            </div>
            <div className=' z-30 grid grid-cols-1 min-[380px]:grid-cols-2 min-[480px]:grid-cols-[70%,30%] '>
                <div className='transition-color z-30 flex flex-col p-4 w-full justify-between'>
                    <div className='space-y-1'>
                        <p className=' text-indigo-400 font-semibold delay-500 group-hover:text-white'>{id}</p>
                        <h4 className=' font-bold text-2xl delay-500 group-hover:text-white'>{superhero}</h4>
                        <p className='font-semibold text-slate-400 delay-500 group-hover:text-white'>{alter_ego}</p>
                    </div>
                    <p className='z-30 justify-self-end font-medium text-slate-300 delay-500 group-hover:text-white'>{first_appearance}</p>
                </div>
                <div className='z-30 justify-self-end'>
                    <img className='w-32 h-full' alt={superhero} src={img} />
                </div>
                <button className='z-50 transition-all ease-in-out translate-y-4 duration-200 delay-500 group-hover:visible group-hover:translate-y-0 shadow-md invisible  absolute bottom-0 w-full h-6 text-center bg-sky-600 text-white'>See details</button>
            </div>
        </Link >
    )
}

export default HeroeCard
