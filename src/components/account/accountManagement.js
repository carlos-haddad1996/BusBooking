import React, { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    Accordion as MuiAccordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails as MuiAccordionDetails,
    Card,
    CardContent,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import AccountCard from './accountCard';
import BusManagement from './busManagement';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const AccountManagement = () => {
    const [expanded, setExpanded] = useState('');
    const [clients, setClients] = useState([]);
    const [buses, setBuses] = useState([]);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        getClients()
            .then((res) => setClients(res.clientes))
            .catch((err) => console.log(err));

        getBuses()
            .then((res) => setBuses(res.buses))
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

    const getBuses = async () => {
        const response = await fetch('/buses');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    if (clients[0] === undefined || buses[0] === undefined) {
        return <Typography>Loading</Typography>;
    } else {
        return (
            <Grid item container alignItems="center" spacing={4}>
                <Grid item container>
                    <Accordion
                        square
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography>Registered Clients</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid
                                item
                                container
                                spacing={2}
                                alignItems="center"
                                justify="flex-end"
                            >
                                {clients[0].map((client) => {
                                    return (
                                        <Grid
                                            item
                                            xs={6}
                                            container
                                            key={client}
                                        >
                                            <AccountCard client={client} />
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item container>
                    <Accordion
                        square
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                    >
                        <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography>Buses Disponibles</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid
                                item
                                container
                                spacing={2}
                                alignItems="center"
                                justify="flex-end"
                            >
                                <Grid item container>
                                    <BusManagement buses={buses[0]} />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        );
    }
};

export default AccountManagement;
