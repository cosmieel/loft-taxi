import React, { useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useStyles } from './orderStyles'
import { Grid, MenuItem, Select, Button, FormControl, InputLabel } from '@material-ui/core/'
import { fetchAddressRequest, getAddressList, getError } from '../../../modules/address'
import { fetchRouteRequest } from '../../../modules/route'
import { TooltipComponent } from '../TooltipComponent/TooltipComponent'

const OrderForm = ({ addressList, fetchRouteRequest, fetchAddressRequest, error }) => {
    const ref = createRef()
    const classes = useStyles()
    const { register, handleSubmit, setValue, getValues, watch } = useForm()

    useEffect(() => {
        fetchAddressRequest()

        register({ name: "from" }, { required: true });
        register({ name: "to" }, { required: true });
    }, [fetchAddressRequest, register])

    const values = getValues()
    const watchFrom = watch("from")
    const watchTo = watch("to")

    const OrderAddressSelect = ({ addressKey, filteredAddressOption }) => {

        let filterAddressOption = addressList
            .filter(item => item !== filteredAddressOption)
            .map(addressOption => (
                <MenuItem key={addressOption} value={addressOption}>{addressOption}</MenuItem>
            ))

        return (
            <Select
                value={values[addressKey] || ""}
                onChange={onChange}
                name={addressKey}
                inputProps={{ name: addressKey, id: addressKey }}
                data-testid={addressKey}
                autoWidth
            >
                {filterAddressOption}
            </Select>
        )
    }

    const onChange = e => {
        setValue(e.target.name, e.target.value)
    }

    const onSubmit = data => {
        fetchRouteRequest(data)
    }

    return (
        <TooltipComponent
            ref={ref}
            title={error}
            open={!!error}
        >
            <form noValidate onSubmit={handleSubmit(onSubmit)} data-testid='OrderForm'>
                <Grid container>
                    <Grid item xs={12} className={classes.order__select} data-testid='addressFrom'>
                        <FormControl className={classes.order__selectItem}>
                            <InputLabel htmlFor='from'>Откуда</InputLabel>
                            <OrderAddressSelect addressKey='from' filteredAddressOption={watchTo} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className={classes.order__select} data-testid='addressTo'>
                        <FormControl className={classes.order__selectItem}>
                            <InputLabel htmlFor='to'>Куда</InputLabel>
                            <OrderAddressSelect addressKey='to' filteredAddressOption={watchFrom} />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} className={classes.order__btn}>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            data-testid='OrderFormSubmit'
                            fullWidth
                            size='large'
                            disabled={!watchFrom || !watchTo}
                        >
                            Вызвать такси
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </TooltipComponent>
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
    addressList: getAddressList(state),
    error: getError(state)
})

const mapDispatchToProps = {
    fetchAddressRequest,
    fetchRouteRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)