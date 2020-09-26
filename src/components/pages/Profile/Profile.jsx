import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core/'
import { useStyles } from './profileStyles'

export const Profile = ({ children }) => {
    const classes = useStyles()

    return (
        <Paper className={classes.profile}>
            <Grid container
                direction="column"
                alignItems="center"
                className={classes.profile__container}
            >
                <Grid item>
                    <Paper elevation={1} className={classes.profile__card}>
                        <Typography align="center" variant="h4" component="h1">Профиль</Typography>
                        <Typography align="center" className={classes.profile__desc}>Способ оплаты</Typography>

                        {children}
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}