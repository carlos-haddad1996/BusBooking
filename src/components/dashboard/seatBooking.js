import React, { useEffect, useState } from 'react';
import {
    Grid,
    Card,
    Typography,
    CardContent,
    CardActions,
    Button,
} from '@material-ui/core';
import { EventSeat } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    borderLine: {
        borderRadius: '4px',
        border: '2px solid rgb(219, 219, 219)',
    },
    cardPadding: {
        padding: '60px',
    },
    seatColor: {
        height: '30px',
        width: '40px',
        cursor: 'pointer',
        color: 'grey',
        '&:hover': {
            color: '#766882',
        },
    },
    seatAvailable: {
        height: '30px',
        width: '40px',
        color: 'grey',
    },
    seatOccupied: {
        height: '30px',
        width: '40px',
        color: '#766882',
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

const SeatBooking = () => {
    const classes = useStyles();

    const normalColumn = [1, 2, 3, 4, 5];
    const vipColumn = [1, 2];

    return (
        <Grid container spacing={4}>
            <Card className={classes.cardPadding}>
                <CardContent>
                    <Grid item container spacing={4}>
                        <Typography variant="body1">
                            Selecciona tu tipo de asiento
                        </Typography>
                        <Grid item container>
                            <Grid item xs={8}>
                                <Typography variant="body2">Normal</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">VIP</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            className={classes.borderLine}
                            spacing={1}
                        >
                            <Grid item container>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    spacing={1}
                                    xs={8}
                                >
                                    <Grid
                                        item
                                        container
                                        spacing={1}
                                        direction="row"
                                    >
                                        {normalColumn.map((item) => {
                                            return (
                                                <Grid item key={item}>
                                                    <EventSeat
                                                        className={
                                                            classes.seatColor
                                                        }
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        spacing={1}
                                        direction="row"
                                    >
                                        {normalColumn.map((item) => {
                                            return (
                                                <Grid item key={item}>
                                                    <EventSeat
                                                        className={
                                                            classes.seatColor
                                                        }
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    spacing={1}
                                    xs={4}
                                >
                                    <Grid
                                        item
                                        container
                                        spacing={1}
                                        direction="row"
                                    >
                                        {vipColumn.map((item) => {
                                            return (
                                                <Grid item key={item}>
                                                    <EventSeat
                                                        className={
                                                            classes.seatColor
                                                        }
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        spacing={1}
                                        direction="row"
                                    >
                                        {vipColumn.map((item) => {
                                            return (
                                                <Grid item key={item}>
                                                    <EventSeat
                                                        className={
                                                            classes.seatColor
                                                        }
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    spacing={1}
                                    xs={8}
                                >
                                    <Grid
                                        item
                                        container
                                        spacing={1}
                                        direction="row"
                                    >
                                        {normalColumn.map((item) => {
                                            return (
                                                <Grid item key={item}>
                                                    <EventSeat
                                                        className={
                                                            classes.seatColor
                                                        }
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        spacing={1}
                                        direction="row"
                                    >
                                        {normalColumn.map((item) => {
                                            return (
                                                <Grid item key={item}>
                                                    <EventSeat
                                                        className={
                                                            classes.seatColor
                                                        }
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    direction="column"
                                    spacing={1}
                                    xs={4}
                                >
                                    <Grid
                                        item
                                        container
                                        spacing={1}
                                        direction="row"
                                    >
                                        {vipColumn.map((item) => {
                                            return (
                                                <Grid item key={item}>
                                                    <EventSeat
                                                        className={
                                                            classes.seatColor
                                                        }
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        spacing={1}
                                        direction="row"
                                    >
                                        {vipColumn.map((item) => {
                                            return (
                                                <Grid item key={item}>
                                                    <EventSeat
                                                        className={
                                                            classes.seatColor
                                                        }
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs direction="column">
                            <Grid item container spacing={2} direction="row">
                                <Grid item>
                                    <EventSeat
                                        className={classes.seatAvailable}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        Disponible
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} direction="row">
                                <Grid item>
                                    <EventSeat
                                        className={classes.seatOccupied}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        Ocupado
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    size="small"
                                    className={classes.buttonColor}
                                    // onClick={onDestinationClick}
                                >
                                    <div className={classes.textColor}>
                                        Siguiente
                                    </div>
                                </Button>
                            </CardActions>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default SeatBooking;
