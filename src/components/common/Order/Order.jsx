import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { useStyles } from './orderStyles'
import { Paper } from '@material-ui/core/'
import { OrderNotAllowed } from './OrderNotAllowed'
import { OrderAccepted } from './OrderAccepted'
import OrderForm from './OrderForm'
import { getIsProfileDataSaved } from '../../../modules/profile'
import { getIsOrderAccepted, fetchRouteReset } from '../../../modules/route'

const Order = ({ isProfileDataSaved, isOrderAccepted, fetchRouteReset }) => {
    const classes = useStyles()

    const newOrderHandle = () => {
        fetchRouteReset()
    }

    const OrderContainer = () => {
        if (!isProfileDataSaved) {
            return <OrderNotAllowed />;
        }
        if (isOrderAccepted) {
            return <OrderAccepted newOrderHandle={newOrderHandle} />;
        }
        return <OrderForm />
    }

    return (
        <Paper className={classes.order}>
            <OrderContainer />
        </Paper>
    )
}

Order.propTypes = {
    fetchRouteReset: PropTypes.func,
    isProfileDataSaved: PropTypes.bool,
    isOrderAccepted: PropTypes.bool
}

const mapStateToProps = state => ({
    isProfileDataSaved: getIsProfileDataSaved(state),
    isOrderAccepted: getIsOrderAccepted(state)
})

const mapDispatchToProps = {
    fetchRouteReset
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)