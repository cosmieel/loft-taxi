import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Typography, Button } from '@material-ui/core/'
import { useStyles } from './orderStyles'


export const OrderAccepted = ({ newOrderHandle }) => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} className={classes.order__title}>
                <Typography variant="h4" component="h1" align='left'>
                    Заказ размещён
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.order__desc}>
                <Typography component="p" align='left'>
                    Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button
                    onClick={newOrderHandle}
                    variant='contained'
                    color='primary'
                    fullWidth={true}
                >
                    Сделать новый заказ
                </Button>
            </Grid>
        </Grid>
    )
}

OrderAccepted.propTypes = {
    newOrderHandle: PropTypes.func,
}