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

const Destination = () => {
    const classes = useStyles();
    const history = useHistory();

    const [origen, setOrigen] = useState([]);
    const [destino, setDestino] = useState([]);
    const [origenValue, setOrigenValue] = useState('');
    const [destinoValue, setDestinoValue] = useState('');

    const getCiudadOrigen = async () => {
        const response = await fetch('/origen');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    const getCiudadDestino = async () => {
        const response = await fetch('/destino');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    useEffect(() => {
        getCiudadOrigen()
            .then((res) => setOrigen(res.ciudadOrigen))
            .catch((err) => console.log(err));

        getCiudadDestino()
            .then((res) => setDestino(res.ciudadDestino))
            .catch((err) => console.log(err));
    }, []);

    const onDestinationClick = () => {
        history.push('/time-selector');
    };

    if (origen[0] === undefined || destino[0] === undefined) {
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
                                Selecciona tu ruta
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
                                            <InputLabel id="origen-dropdown">
                                                Origen
                                            </InputLabel>
                                            <Select
                                                labelId="origen"
                                                id="origen"
                                                value={origenValue}
                                                onChange={(e) =>
                                                    setOrigenValue(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {origen[0].map((item) => {
                                                    return (
                                                        <MenuItem
                                                            key={item.Id}
                                                            value={item.Id}
                                                        >
                                                            {item.Ciudad}
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
                                            <InputLabel id="destino-dropdown">
                                                Destino
                                            </InputLabel>
                                            <Select
                                                labelId="destino"
                                                id="destino"
                                                value={destinoValue}
                                                onChange={(e) =>
                                                    setDestinoValue(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {destino[0].map((ciudad) => {
                                                    return (
                                                        <MenuItem
                                                            key={ciudad.Id}
                                                            value={ciudad.Id}
                                                        >
                                                            {ciudad.Ciudad}
                                                        </MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item container xs={3}>
                                <NearMe className={classes.nearMeIcon} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.buttonColor}
                            onClick={onDestinationClick}
                        >
                            <div className={classes.textColor}>Buscar</div>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
};

export default Destination;
