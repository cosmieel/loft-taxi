import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ProfileNotice } from './ProfileNotice'

import 'date-fns';
import { Box, Paper, Grid, TextField, Button } from '@material-ui/core/'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { MCIcon } from 'loft-taxi-mui-theme'
import { useStyles } from './profileFormStyles'

import {
    getProfileData, getError,
    postProfileRequest, fetchProfileRequest
} from '../../../modules/profile'

const ProfileForm = ({ postProfileRequest, savedProfileData }) => {
    const classes = useStyles();

    const [profileData, setProfileData] = useState({
        cardNumber: savedProfileData.cardNumber || '',
        expiryDate: savedProfileData.expiryDate || new Date(),
        cardName: savedProfileData.cardName || '',
        cvc: savedProfileData.cvc || '',
        token: window.localStorage.getItem('token')
    })
    const [showNotice, setShowNotice] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        postProfileRequest(profileData)
        setShowNotice(true)
    }

    const onInputChange = e => {
        let input = e.target
        setProfileData({
            ...profileData,
            [input.name]: input.value
        })
        setShowNotice(false)
    }

    const onDateInputChange = date => {
        setProfileData({
            ...profileData,
            expiryDate: date
        })
        setShowNotice(false)
    }

    if (showNotice) {
        return <ProfileNotice />
    }

    return (
        <form onSubmit={onSubmit}>
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
                                    <TextField
                                        name="cardNumber"
                                        type="text"
                                        label="Номер карты:"
                                        placeholder="0000 0000 0000 0000"
                                        value={profileData.cardNumber}
                                        onChange={onInputChange}
                                        inputProps={{ maxLength: 16, "data-testid": "profileCardNumber" }}
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        required
                                    />
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker
                                            name="expiryDate"
                                            label="Срок действия:"
                                            placeholder="12/23"
                                            value={profileData.expiryDate}
                                            onChange={onDateInputChange}
                                            openTo="year"
                                            minDate={new Date()}
                                            views={["year", "month"]}
                                            format="MM/yy"
                                            inputProps={{ "data-testid": "profileExpiryDate" }}
                                            InputLabelProps={{ shrink: true }}
                                            autoOk={true}
                                            fullWidth
                                            required
                                        />
                                    </MuiPickersUtilsProvider>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper elevation={3} className={classes.profileForm__card}>
                                <Box className={classes.profileForm__fields}>
                                    <TextField
                                        name="cardName"
                                        type="text"
                                        label="Имя владельца:"
                                        placeholder="USER NAME"
                                        value={profileData.cardName}
                                        onChange={onInputChange}
                                        inputProps={{ "data-testid": "profileCardName" }}
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        name="cvc"
                                        type="text"
                                        label="CVC:"
                                        placeholder="CVC"
                                        value={profileData.cvc}
                                        onChange={onInputChange}
                                        inputProps={{ maxLength: 3, "data-testid": "profileCVC" }}
                                        InputLabelProps={{ shrink: true }}
                                        required
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
                        >
                            Сохранить
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
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
