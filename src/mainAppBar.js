import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Typography,
    Drawer,
    AppBar,
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemText,
    CssBaseline,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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

const MainAppBar = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Bus Booking
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {['Home', 'Settings', 'Account Management'].map(
                            (text, item) => (
                                <ListItem button key={text}>
                                    {text === 'Home' ? (
                                        <ListItemText
                                            primary={text}
                                            style={{
                                                color: 'white',
                                                fontWeight: '50%',
                                            }}
                                            onClick={() => history.push('/')}
                                        />
                                    ) : (
                                        <ListItemText
                                            primary={text}
                                            style={{
                                                color: 'white',
                                                fontWeight: '50%',
                                            }}
                                        />
                                    )}
                                </ListItem>
                            )
                        )}
                    </List>
                    <Divider />
                    <List>
                        {['Sign Out'].map((text, item) => (
                            <ListItem
                                button
                                key={text}
                                onClick={() => history.push('/login')}
                            >
                                <ListItemText
                                    primary={text}
                                    style={{
                                        color: 'white',
                                        fontWeight: '50%',
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default MainAppBar;
