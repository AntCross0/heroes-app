import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoginScreen } from '../components/login/LoginScreen';


export const PublicRoute = ({ isAuthenticated }) => {
    const lastPath = localStorage.getItem('lastPath') || '/dc';

    return isAuthenticated ? <Navigate to={lastPath} /> : <LoginScreen />;
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}
