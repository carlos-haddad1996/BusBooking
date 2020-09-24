import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const BusManagement = ({ buses }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Buses</TableCell>
                        <TableCell align="right">Placa</TableCell>
                        <TableCell align="right">VIN</TableCell>
                        <TableCell align="right">Modelo</TableCell>
                        <TableCell align="right">Asientos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {buses.map((bus) => (
                        <TableRow key={bus.Id}>
                            <TableCell component="th" scope="row">
                                {bus.Marca}
                            </TableCell>
                            <TableCell align="right">{bus.Placa}</TableCell>
                            <TableCell align="right">{bus.VIN}</TableCell>
                            <TableCell align="right">{bus.Modelo}</TableCell>
                            <TableCell align="right">{bus.Asientos}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BusManagement;
