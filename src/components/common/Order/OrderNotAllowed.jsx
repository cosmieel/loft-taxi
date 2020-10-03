import React from 'react'

import { NavLink } from '../NavLink/NavLink'
import { Grid, Typography, Button } from '@material-ui/core/'
import { useStyles } from './orderStyles'


export const OrderNotAllowed = () => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} className={classes.order__title}>
                <Typography variant="h4" component="h1" align='left'>
                    Заполните платежные данные
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.order__desc}>
                <Typography component="p" align='left'>
                    Укажите информацию о банковской карте, чтобы сделать заказ.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button
                    component={NavLink}
                    to='/profile'
                    variant='contained'
                    color='primary'
                    fullWidth={true}
                >
                    Перейти в Профиль
                </Button>
            </Grid>
        </Grid>
    )
}