import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';

const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                <Route exact path='/login' Component={LoginScreen} />


                <Route path='*' element={<PrivateRoute isAuthenticated={user.logged} />} />


            </Routes>
        </Router>
    )
}

export default AppRouter
