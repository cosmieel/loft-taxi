import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { Grid, Button, TextField } from '@material-ui/core/'
import { useStyles } from '../../styles/form'
import { getIsLoggedIn, getError, fetchLoginRequest } from '../../../modules/auth'

const FormLogin = ({ fetchLoginRequest, isLoggedIn }) => {
    const classes = useStyles()
    const { control, handleSubmit, errors, trigger } = useForm({
        mode: 'onBlur',
    })
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const onSubmit = async data => {
        await fetchLoginRequest(data)
    }

    const onInputChange = useCallback(({ e }) => {
        let input = e.target
        setUserData({
            ...userData,
            [input.name]: input.value
        })
    }, [userData])


    if (isLoggedIn) return <Redirect to="/map" />

    return (
        <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
                <Grid item xs={12}>
                    <Controller
                        as={TextField}
                        control={control}
                        className={classes.form__field}
                        id="email"
                        name="email"
                        type="email"
                        label="Имя пользователя"
                        error={!!errors.email}
                        helperText={errors.email && 'Укажите email'}
                        rules={{
                            required: true,
                        }}
                        defaultValue=""
                        value={userData.email}
                        onChange={onInputChange}
                        inputProps={{ "data-testid": "loginEmail" }}
                        fullWidth={true}
                        required={true}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        as={TextField}
                        control={control}
                        className={classes.form__field}
                        id="password"
                        name="password"
                        type="password"
                        label="Пароль"
                        error={!!errors.password}
                        helperText={errors.password && errors.password.message}
                        rules={{
                            required: 'Укажите пароль',
                            minLength: {
                                value: 6,
                                message: 'Минимальная длина пароля - 6 символов',
                            },
                        }}
                        value={userData.password}
                        onChange={onInputChange}
                        defaultValue=""
                        inputProps={{ "data-testid": "loginPassword" }}
                        fullWidth={true}
                        required={true}
                    />
                </Grid>
                <Grid item xs={12} align="right">
                    <Button type="submit" variant="contained" color="primary" data-testid="loginSubmit" onClick={() => trigger()}>
                        Войти
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

FormLogin.propTypes = {
    fetchLoginRequest: PropTypes.func,
    isLoggedIn: PropTypes.bool
}

const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedIn(state),
    error: getError(state)
})

const mapDispatchToProps = { fetchLoginRequest }

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin)