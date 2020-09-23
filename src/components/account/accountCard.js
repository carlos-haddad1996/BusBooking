import React from 'react';
import { Card, Typography, Grid, CardHeader, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        color: '#885aad',
    },
}));

const AccountCard = ({ client }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        src={<AccountCircle />}
                        aria-label="avatar-picture"
                        className={classes.avatar}
                    />
                }
                title={`${client.Nombre} ${client.Apellido}`}
                subheader={client.Email}
            />
        </Card>
    );
};

export default AccountCard;
