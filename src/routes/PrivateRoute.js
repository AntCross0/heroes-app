import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashboardRoutes from './DashboardRoutes';


export const PrivateRoute = ({ isAuthenticated }) => {


    const lastPath = useLocation();
    localStorage.setItem('lastPath', lastPath.pathname);

    return isAuthenticated ? <DashboardRoutes /> : <Navigate to='/login' />;
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}


