import React from 'react'

import SpiderMan from '../../img/marvel-spider.webp';
import CaptainAmerica from '../../img/marvel-captain.webp';
import IronMan from '../../img/marvel-iron.webp';
import Thor from '../../img/marvel-thor.webp';
import Hulk from '../../img/marvel-hulk.webp';
import Wolverine from '../../img/marvel-wolverine.webp';
import Daredevil from '../../img/marvel-daredevil.webp';
import Hawkeye from '../../img/marvel-hawkeye.webp';
import Cyclops from '../../img/marvel-cyclops.webp';
import SilverSurfer from '../../img/marvel-silver.webp';
import Batman from '../../img/dc-batman.webp';
import Superman from '../../img/dc-superman.webp';
import Flash from '../../img/dc-flash.webp';
import GreenLantern from '../../img/dc-green.webp';
import GreenArrow from '../../img/dc-arrow.webp';
import WonderWoman from '../../img/dc-wonder.webp';
import MartianManhunter from '../../img/dc-martian.webp';
import RobinNightwing from '../../img/dc-robin.webp';
import BlueBeetle from '../../img/dc-blue.webp';
import BlackCanary from '../../img/dc-black.webp';

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
];





const HeroeImage = ({ id }) => {
    let img = imgarr.find(hero => hero.includes(id));
    return (
        img
    )
}

export default HeroeImage
