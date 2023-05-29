import React from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import NavBar from '../components/ui/NavBar';
import SearchScreen from '../components/search/SearchScreen';


const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className='p-4'>
                <Routes>
                    <Route path='/dc' Component={DcScreen} />
                    <Route path='/marvel' Component={MarvelScreen} />
                    <Route path='/hero/:heroId' Component={HeroesScreen} />
                    <Route path='/search' Component={SearchScreen} />
                </Routes>
            </div>
        </>
    )
}

export default DashboardRoutes;

