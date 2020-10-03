import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core/'
import { useStyles } from './profileFormStyles'
import { NavLink } from '../NavLink/NavLink'

export const ProfileNotice = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.profileForm__notice} data-testid="profileNotice">
            <Grid item xs={12}>
                <Typography>Платёжные данные обновлены. Теперь вы можете заказывать такси.</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button
                    className={classes.profileForm__noticeButton}
                    data-testid="goToMap"
                    component={NavLink}
                    to="/map"
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Перейти на карту
                </Button>
            </Grid>
        </Grid>
    )
}