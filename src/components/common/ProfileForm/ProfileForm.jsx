import React, { useState, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ProfileNotice } from './ProfileNotice'
import { useForm, Controller } from 'react-hook-form'
import NumberFormat from 'react-number-format'
import 'date-fns'
import { Box, Paper, Grid, TextField, Button } from '@material-ui/core/'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { MCIcon } from 'loft-taxi-mui-theme'
import { useStyles } from './profileFormStyles'
import { TooltipComponent } from '../TooltipComponent/TooltipComponent'
import {
    getProfileData, getError,
    postProfileRequest, fetchProfileRequest
} from '../../../modules/profile'

const ProfileForm = ({ postProfileRequest, fetchProfileRequest, savedProfileData, error }) => {
    const ref = createRef()
    const classes = useStyles()
    const { control, handleSubmit, setValue, errors, trigger } = useForm({
        mode: 'onBlur',
    })

    const CardNumberFormat = (props) => {
        const { inputRef, onChange, ...rest } = props
        return (
            <NumberFormat
                {...rest}
                onValueChange={(values) => {
                    setValue('cardNumber', values.value)
                }}
                isNumericString
                format="#### #### #### ####"
            />
        )
    }

    useEffect(() => {
        setValue('cardNumber', savedProfileData.cardNumber || '')
        setValue('expiryDate', savedProfileData.expiryDate || new Date())
        setValue('cardName', savedProfileData.cardName || '')
        setValue('cvc', savedProfileData.cvc || '')
    }, [savedProfileData, setValue])

    const [showNotice, setShowNotice] = useState(false)

    const onSubmit = data => {
        postProfileRequest(data)
        setShowNotice(true)
    }

    if (showNotice) {
        return <ProfileNotice />
    }

    return (
        <TooltipComponent
            ref={ref}
            title={error}
            open={!!error}
        >
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container alignContent="center">
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={4}
                            justify="center"
                            className={classes.profileForm__container}
                        >
                            <Grid item xs={6}>
                                <Paper elevation={3} className={classes.profileForm__card}>
                                    <Box className={classes.profileForm__fields}>
                                        <div className={classes.profileForm__icon}><MCIcon /></div>
                                        <Controller
                                            as={TextField}
                                            control={control}
                                            className={classes.profileForm__field}
                                            name="cardNumber"
                                            type="text"
                                            label="Номер карты:"
                                            placeholder="0000 0000 0000 0000"
                                            defaultValue=""
                                            inputProps={{ "data-testid": "profileCardNumber" }}
                                            InputLabelProps={{ shrink: true }}
                                            InputProps={{
                                                inputComponent: CardNumberFormat,
                                            }}
                                            rules={{
                                                required: 'Укажите номер карты',
                                                minLength: {
                                                    value: 16,
                                                    message: 'В номере карты 16 цифр',
                                                },
                                            }}
                                            error={errors.cardNumber && true}
                                            helperText={errors.cardNumber && errors.cardNumber.message}
                                            fullWidth={true}
                                            required={true}
                                        />
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Controller
                                                as={DatePicker}
                                                control={control}
                                                className={classes.profileForm__field}
                                                name="expiryDate"
                                                label="Срок действия:"
                                                minDate={new Date()}
                                                format="MM/yy"
                                                defaultValue=""
                                                clearable
                                                disablePast
                                                views={["year", "month"]}
                                                inputProps={{ "data-testid": "profileExpiryDate" }}
                                                InputLabelProps={{ shrink: true }}
                                                rules={{
                                                    required: 'Укажите срок действия карты',
                                                }}
                                                error={!!errors.expiryDate}
                                                helperText={errors.expiryDate && errors.expiryDate.message}
                                                fullWidth={true}
                                                required={true}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={3} className={classes.profileForm__card}>
                                    <Box className={classes.profileForm__fields}>
                                        <Controller
                                            as={TextField}
                                            control={control}
                                            className={classes.profileForm__field}
                                            name="cardName"
                                            type="text"
                                            label="Имя владельца:"
                                            placeholder="USER NAME"
                                            defaultValue=""
                                            inputProps={{
                                                "data-testid": "profileCardName",
                                                "style": { textTransform: 'uppercase' }
                                            }}
                                            InputLabelProps={{ shrink: true }}
                                            rules={{
                                                required: 'Укажите имя владельца',
                                                pattern: {
                                                    value: /^[A-Za-z\s]+$/i,
                                                    message: 'Формат имени: NAME SURNAME'
                                                },
                                            }}
                                            error={!!errors.cardName}
                                            helperText={errors.cardName && errors.cardName.message}
                                            fullWidth={true}
                                            required={true}
                                        />
                                        <Controller
                                            as={TextField}
                                            control={control}
                                            className={classes.profileForm__field}
                                            name="cvc"
                                            type="text"
                                            label="CVC:"
                                            placeholder="CVC"
                                            defaultValue=""
                                            inputProps={{ maxLength: 3, "data-testid": "profileCVC" }}
                                            InputLabelProps={{ shrink: true }}
                                            rules={{
                                                required: 'Укажите CVC',
                                                minLength: 3,
                                                maxLength: 3
                                            }}
                                            error={!!errors.cvc}
                                            helperText={errors.cvc && errors.cvc.message}
                                            fullWidth={true}
                                            required={true}
                                        />
                                    </Box>
                                </Paper>
                            </Grid>

                        </Grid>
                        <Grid align="center">
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.profileForm__button}
                                data-testid="profileSave"
                                onClick={() => trigger()}
                            >
                                Сохранить
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </TooltipComponent>
    )
}

ProfileForm.propTypes = {
    postProfileRequest: PropTypes.func,
    fetchProfileRequest: PropTypes.func,
    savedProfileData: PropTypes.object
}

const mapStateToProps = state => ({
    savedProfileData: getProfileData(state),
    error: getError(state)
})

const mapDispatchToProps = {
    postProfileRequest,
    fetchProfileRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)
