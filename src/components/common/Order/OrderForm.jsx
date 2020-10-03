import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { useStyles } from './orderStyles'
import { Grid, MenuItem, Select, Button, FormControl, InputLabel } from '@material-ui/core/'
import { fetchAddressRequest, getAddressList } from '../../../modules/address'
import { fetchRouteRequest } from '../../../modules/route'

const OrderForm = ({ addressList, fetchRouteRequest, fetchAddressRequest }) => {
    const classes = useStyles()
    const [route, setRoute] = useState({
        from: '',
        to: ''
    })

    useEffect(() => {
        fetchAddressRequest()
    }, [fetchAddressRequest])

    const OrderAddressSelect = ({ addressKey, filteredAddressOption }) => {

        let filterAddressOption = addressList
            .filter(item => item !== filteredAddressOption)
            .map(addressOption => (
                <MenuItem key={addressOption} value={addressOption}>{addressOption}</MenuItem>
            ))

        return (
            <Select
                value={route[addressKey]}
                onChange={onChange}
                inputProps={{ name: addressKey, id: addressKey }}
                data-testid={addressKey}
                autoWidth
            >
                {filterAddressOption}
            </Select>
        )
    }

    const onChange = e => {
        let input = e.target
        setRoute({
            ...route,
            [input.name]: input.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        fetchRouteRequest(route)
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container>
                <Grid item xs={12} className={classes.order__select}>
                    <FormControl className={classes.order__selectItem}>
                        <InputLabel htmlFor='from'>Откуда</InputLabel>
                        <OrderAddressSelect addressKey='from' filteredAddressOption={route.to} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} className={classes.order__select}>
                    <FormControl className={classes.order__selectItem}>
                        <InputLabel htmlFor='to'>Куда</InputLabel>
                        <OrderAddressSelect addressKey='to' filteredAddressOption={route.from} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} className={classes.order__btn}>
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        data-testid='buttonLogin'
                        fullWidth
                        size='large'
                    >
                        Вызвать такси
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

OrderForm.propTypes = {
    fetchAddressRequest: PropTypes.func,
    fetchRouteRequest: PropTypes.func,
    addressList: PropTypes.array,
    addressKey: PropTypes.string,
    filteredAddressOption: PropTypes.string
}

const mapStateToProps = state => ({
    addressList: getAddressList(state)
})

const mapDispatchToProps = {
    fetchAddressRequest,
    fetchRouteRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)