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
        <div key={id}
            className='bg-white transition-all w-full min-[380px]:w-11/12 min-[480px]:w-[26rem] rounded drop-shadow-sm overflow-hidden'>
            <div className=' grid grid-cols-1 min-[380px]:grid-cols-2 min-[480px]:grid-cols-2'>
                <div className=' flex flex-col p-4 w-full'>
                    <p className=' text-indigo-400 font-semibold'>{id}</p>
                    <h4 className=' font-bold text-2xl'>{superhero}</h4>
                    <p className='font-semibold text-slate-400'>{characters}</p>
                    <div className='w-full'>
                        <p className='font-medium text-slate-300'>{first_appearance}</p>

                    </div>
                </div>
                <div className=' justify-self-end'>
                    <img className='w-32 h-full' alt={superhero} src={img} />
                </div>


            </div>
        </div >
    )
}

export default HeroeCard
