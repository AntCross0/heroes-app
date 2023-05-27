import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import NavBar from '../components/ui/NavBar';

const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path='/dc' Component={DcScreen} />
                    <Route path='/marvel' Component={MarvelScreen} />
                    <Route path='/heroes/:heroesId' Component={HeroesScreen} />
                </Routes>
            </div>
        </>
    )
}

export default DashboardRoutes;

