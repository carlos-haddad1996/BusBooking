import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Grid,
    Card,
    Typography,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    CardContent,
    CardActionArea,
    CardMedia,
    CardActions,
    Button,
} from '@material-ui/core';
import { WatchLater } from '@material-ui/icons';
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
    hourIcon: {
        color: '#766882',
        height: '110px',
        width: '100px',
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

const TimeSelector = () => {
    const classes = useStyles();
    const history = useHistory();

    const [salida, setSalida] = useState([]);
    const [salidaValueAM, setSalidaValueAM] = useState('');
    const [salidaValuePM, setSalidaValuePM] = useState('');

    const getHoraSalida = async () => {
        const response = await fetch('/hora-salida');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    useEffect(() => {
        getHoraSalida()
            .then((res) => setSalida(res.horaSalida))
            .catch((err) => console.log(err));
    }, []);

    const onSeatSelection = () => {
        history.push('/seat-booking');
    };

    if (salida[0] === undefined) {
        return (
            <Grid>
                <Typography>Loading</Typography>
            </Grid>
        );
    } else {
        return (
            <Grid container spacing={3}>
                <Card className={`${classes.minWidth} ${classes.cardPadding}`}>
                    <CardContent>
                        <Grid item xs>
                            <Typography variant="h6">
                                Hemos encontrado una ruta disponible!
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h6">
                                Horarios Disponibles
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            xs
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item container xs={8}>
                                <Grid item container direction="column">
                                    <Grid item>
                                        <FormControl
                                            className={classes.formControl}
                                        >
                                            <InputLabel id="hora-am-value">
                                                AM
                                            </InputLabel>
                                            <Select
                                                labelId="hora-am"
                                                id="salida-am"
                                                value={salidaValueAM}
                                                onChange={(e) =>
                                                    setSalidaValueAM(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {salida[0].map((item) => {
                                                    return (
                                                        <MenuItem
                                                            key={item.Id}
                                                            value={item.Id}
                                                        >
                                                            {item.Hora}
                                                        </MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item container direction="column">
                                    <Grid item>
                                        <FormControl
                                            className={classes.formControl}
                                        >
                                            <InputLabel id="hora-pm-value">
                                                PM
                                            </InputLabel>
                                            <Select
                                                labelId="salida-pm"
                                                id="salida-pm"
                                                value={salidaValuePM}
                                                onChange={(e) =>
                                                    setSalidaValuePM(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {salida[0].map((hora) => {
                                                    return (
                                                        <MenuItem
                                                            key={hora.Id}
                                                            value={hora.Id}
                                                        >
                                                            {hora.Hora}
                                                        </MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container xs={3}>
                                <WatchLater className={classes.hourIcon} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.buttonColor}
                            onClick={onSeatSelection}
                        >
                            <div className={classes.textColor}>Siguiente</div>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
};

export default TimeSelector;
