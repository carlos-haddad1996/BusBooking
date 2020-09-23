import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Grid,
    Typography,
    Drawer,
    AppBar,
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemText,
    FormHelperText,
    CssBaseline,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Destination from '../components/dashboard/destination';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#b6aabf',
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Destination />
            </main>
        </div>
    );
};

export default Dashboard;
