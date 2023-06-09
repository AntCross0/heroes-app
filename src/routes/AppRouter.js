import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {

    const { user } = useContext(AuthContext);
    return (
        <Router>
            <Routes>
                <Route exact path='/login' element={<PublicRoute isAuthenticated={user.logged} />} />

                <Route path='*' element={<PrivateRoute isAuthenticated={user.logged} />} />

            </Routes>
        </Router>
    )
}

export default AppRouter
