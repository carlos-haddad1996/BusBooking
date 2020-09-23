import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, isAuthenticated, ...remainingProps }) => {
    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }

    return <Route component={component} {...remainingProps} />;
};

export default PrivateRoute;
