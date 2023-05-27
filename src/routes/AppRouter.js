import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/login' Component={LoginScreen} />
                <Route path='*' Component={DashboardRoutes} />

            </Routes>
        </Router>
    )
}

export default AppRouter
