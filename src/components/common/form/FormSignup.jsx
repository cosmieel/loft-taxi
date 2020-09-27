import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid, Button, TextField } from '@material-ui/core/'
import { useStyles } from '../../styles/form'
import { getIsLoggedIn, getError, fetchSignUpRequest } from "../../../modules/auth"

const FormSignup = ({ fetchSignUpRequest, isLoggedIn }) => {
    const classes = useStyles()

    const [userData, setUserData] = useState({
        email: '',
        name: '',
        surname: '',
        password: '',
    })

    const onSubmit = e => {
        e.preventDefault()
        fetchSignUpRequest(userData)
    }

    const onInputChange = e => {
        let input = e.target
        setUserData({
            ...userData,
            [input.name]: input.value
        })
    }

    if (isLoggedIn) return <Redirect to="/map" />

    return (
        <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Адрес электронной почты"
                        value={userData.email}
                        onChange={onInputChange}
                        fullWidth={true}
                        required={true}
                        inputProps={{ "data-testid": "signupEmail" }}
                        className={classes.form__field}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="name"
                        name="name"
                        label="Имя"
                        value={userData.name}
                        onChange={onInputChange}
                        fullWidth={true}
                        required={true}
                        inputProps={{ "data-testid": "signupName" }}
                        className={classes.form__field}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="surname"
                        name="surname"
                        label="Фамилия"
                        value={userData.surname}
                        onChange={onInputChange}
                        fullWidth={true}
                        required={true}
                        inputProps={{ "data-testid": "signupSurname" }}
                        className={classes.form__field}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Пароль"
                        value={userData.password}
                        onChange={onInputChange}
                        fullWidth={true}
                        required={true}
                        inputProps={{ "data-testid": "signupPassword" }}
                        className={classes.form__field}
                    />
                </Grid>
                <Grid item xs={12} align="right">
                    <Button type="submit" variant="contained" color="primary" data-testid="signupSubmit">
                        Зарегистрироваться
                    </Button>
                </Grid>
            </Grid>


        </form>
    )
}

FormSignup.propTypes = {
    fetchSignUpRequest: PropTypes.func,
    isLoggedIn: PropTypes.bool
}

const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedIn(state),
    error: getError(state)
})

const mapDispatchToProps = { fetchSignUpRequest }

export default connect(mapStateToProps, mapDispatchToProps)(FormSignup)