import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from '../containers/login';
import Dashboard from '../containers/dashboard';
import MainPage from '../components/dashboard/mainPage';
import TimeSelector from '../components/dashboard/timeSelector';
import SeatBooking from '../components/dashboard/seatBooking';
import PrivateRoute from './privateRoute';
import WrappedComponent from '../containers/wrappedComponent';
import AccountManagement from '../components/account/accountManagement';

const browserHistory = createBrowserHistory();

const AppRoutes = () => {
    const loadRoutes = () => {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route
                    exact
                    path="/"
                    component={MainPage}
                    isAuthenticated={true}
                />
                <PrivateRoute
                    path="/dashboard"
                    component={Dashboard}
                    isAuthenticated={true}
                />
                <PrivateRoute
                    path="/time-selector"
                    component={TimeSelector}
                    isAuthenticated={true}
                />
                <PrivateRoute
                    path="/seat-booking"
                    component={SeatBooking}
                    isAuthenticated={true}
                />
                <PrivateRoute
                    path="/account-management"
                    component={AccountManagement}
                    isAuthenticated={true}
                />
            </Switch>
        );
    };

    return (
        <Router history={browserHistory}>
            <WrappedComponent>
                <CssBaseline />
                {loadRoutes()}
            </WrappedComponent>
        </Router>
    );
};

export default AppRoutes;
