import React, { useEffect, useState } from 'react';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    Button,
    TextField,
    Container,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    cardProperties: {
        backgroundColor: '#cfb0e8',
        height: '450px',
        width: '400px',
    },
    textField: {
        backgroundColor: 'white',
    },
    buttonColor: {
        backgroundColor: '#885aad',
        '&:hover': {
            backgroundColor: '#af60f0',
        },
    },
    textColor: {
        color: 'white',
    },
}));

const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const [clients, setClients] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {
        getClients()
            .then((res) => setClients(res.clientes))
            .catch((err) => console.log(err));
    }, []);

    const getClients = async () => {
        const response = await fetch('/client');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    const onLoginClick = () => {
        let userIncorrect = 'false';
        let passwordIncorrect = 'false';

        clients[0].map((client) => {
            if (
                client.Email === email &&
                client.PassDesencriptada === password
            ) {
                history.push('/dashboard');
            } else {
                client.Email !== email
                    ? (userIncorrect = true)
                    : (userIncorrect = false);
                client.PassDesencriptada !== password
                    ? (passwordIncorrect = true)
                    : (passwordIncorrect = false);
            }
            return client;
        });

        if (userIncorrect) setUserError(true);
        if (passwordIncorrect) setPasswordError(true);
    };

    return (
        <Container component="main" maxWidth="xl">
            <Grid container justify="center">
                <Grid item container>
                    <Card className={classes.cardProperties}>
                        <CardContent>
                            <Grid
                                item
                                container
                                spacing={2}
                                direction="column"
                                justify="flex-start"
                                alignItems="center"
                            >
                                <Grid item>
                                    <Typography align="center" variant="h6">
                                        Login
                                    </Typography>
                                </Grid>
                                <form noValidate>
                                    <Grid
                                        item
                                        container
                                        spacing={3}
                                        justify="center"
                                    >
                                        <Grid item>
                                            <TextField
                                                error={userError}
                                                helperText={
                                                    userError
                                                        ? 'Invalid user'
                                                        : null
                                                }
                                                required
                                                id="user-name"
                                                label="Email"
                                                variant="outlined"
                                                className={classes.textField}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                error={passwordError}
                                                helperText={
                                                    passwordError
                                                        ? 'Invalid password'
                                                        : null
                                                }
                                                required
                                                id="user-password"
                                                label="Password"
                                                variant="outlined"
                                                type="password"
                                                className={classes.textField}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </Grid>
                                        <Grid item container justify="center">
                                            <Button
                                                className={classes.buttonColor}
                                                variant="contained"
                                                size="small"
                                                onClick={onLoginClick}
                                            >
                                                <div
                                                    className={
                                                        classes.textColor
                                                    }
                                                >
                                                    Login
                                                </div>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
