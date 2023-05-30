import React from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import DashboardRoutes from './DashboardRoutes';


export const PrivateRoute = ({ isAuthenticated }) => {




    return isAuthenticated ? <DashboardRoutes /> : <Navigate to='/login' replace />;
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}


