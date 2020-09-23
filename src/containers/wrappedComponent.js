import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import MainAppBar from '../mainAppBar';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    wrapperMargin: {
        margin: '150px 36px 30px',
        [theme.breakpoints.down(820)]: {
            margin: '30% 5%',
        },
    },
    wrappedContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperFullHeight: {
        height: '100vh',
        [theme.breakpoints.down(820)]: {
            margin: '0 10%',
        },
    },
}));

const WrappedComponent = ({ children }) => {
    const classes = useStyles();
    let hideMainAppBar = false;
    const match = useRouteMatch();
    const paths = ['/login', '/404'];

    if (paths.includes(match.path)) hideMainAppBar = true;

    const styleClasses = paths.includes(match.path)
        ? `${classes.offset} ${classes.wrapperFullHeight}`
        : `${classes.offset} ${classes.wrapperMargin}`;

    return (
        <div id="wrappedComponent" className={classes.wrappedContainer}>
            {hideMainAppBar ? null : <MainAppBar />}
            <div className={`${classes.offset} ${styleClasses}`}>
                {children}
            </div>
        </div>
    );
};

export default WrappedComponent;
