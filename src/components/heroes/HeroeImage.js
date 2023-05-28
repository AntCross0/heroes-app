import React from 'react'

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
];





const HeroeImage = ({ id }) => {
    let img = imgarr.find(hero => hero.includes(id));
    return (
        img
    )
}

export default HeroeImage
