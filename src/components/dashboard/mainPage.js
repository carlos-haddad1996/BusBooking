import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Card, Typography, CardContent, Button } from '@material-ui/core';
import { NearMe } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    cardPadding: {
        padding: '60px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    nearMeIcon: {
        color: '#766882',
        height: '60px',
        width: '50px',
    },
    buttonColor: {
        backgroundColor: '#766882',
        '&:hover': {
            backgroundColor: '#af60f0',
        },
    },
    textColor: {
        color: 'white',
    },
}));

const MainPage = () => {
    const classes = useStyles();
    const history = useHistory();

    const onDestinationClick = () => {
        history.push('/dashboard');
    };

    return (
        <Grid container direction="column" spacing={3}>
            <Grid item>
                <Typography align="left" variant="h3">
                    Bienvenidos!
                </Typography>
            </Grid>
            <Grid item>
                <Card className={`${classes.minWidth} ${classes.cardPadding}`}>
                    <CardContent>
                        <Grid item container direction="column" spacing={4}>
                            <Grid item>
                                <Typography align="left" variant="body1">
                                    Revisa tus destinos disponibles.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    size="small"
                                    className={classes.buttonColor}
                                    onClick={onDestinationClick}
                                >
                                    <div className={classes.textColor}>
                                        Destinos Disponibles
                                    </div>
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default MainPage;
