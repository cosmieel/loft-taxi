import React, { useState, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { Grid, Button, TextField } from '@material-ui/core/'
import { useStyles } from '../../styles/form'
import { getIsLoggedIn, getError, fetchSignUpRequest } from '../../../modules/auth'
import { emailPattern } from '../../../constants'
import { TooltipComponent } from '../TooltipComponent/TooltipComponent'

const FormSignup = ({ fetchSignUpRequest, isLoggedIn, isError }) => {
    const ref = createRef()
    const classes = useStyles()
    const { control, handleSubmit, errors, trigger } = useForm({
        mode: 'onBlur',
    })
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        surname: '',
        password: '',
    })

    const onSubmit = async data => {
        await fetchSignUpRequest(data)
    }

    useEffect(() => {
        isError && localStorage.clear();
    }, [isError])

    const onInputChange = e => {
        let input = e.target
        setUserData({
            ...userData,
            [input.name]: input.value
        })
    }

    if (isLoggedIn) return <Redirect to="/map" />

    return (
        <TooltipComponent 
            ref={ref} 
            title={isError} 
            open={!!isError}
        >
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Controller
                            as={TextField}
                            control={control}
                            className={classes.form__field}
                            id="email"
                            name="email"
                            type="email"
                            label="Адрес электронной почты"
                            defaultValue=""
                            value={userData.email}
                            onChange={onInputChange}
                            error={!!errors.email}
                            helperText={errors.email && errors.email.message}
                            rules={{
                                required: 'Укажите email',
                                pattern: {
                                    value: emailPattern,
                                    message: 'Формат email: ###@###.###',
                                }
                            }}
                            inputProps={{ "data-testid": "signupEmail" }}
                            fullWidth={true}
                            required={true}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            as={TextField}
                            control={control}
                            className={classes.form__field}
                            id="name"
                            name="name"
                            label="Имя"
                            defaultValue=""
                            value={userData.name}
                            onChange={onInputChange}
                            error={!!errors.name}
                            helperText={errors.name && 'Укажите имя'}
                            rules={{ required: true }}
                            fullWidth={true}
                            required={true}
                            inputProps={{ "data-testid": "signupName" }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            as={TextField}
                            control={control}
                            className={classes.form__field}
                            id="surname"
                            name="surname"
                            label="Фамилия"
                            defaultValue=""
                            value={userData.surname}
                            onChange={onInputChange}
                            error={!!errors.surname}
                            helperText={errors.surname && 'Укажите фамилию'}
                            rules={{ required: true }}
                            fullWidth={true}
                            required={true}
                            inputProps={{ "data-testid": "signupSurname" }}
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
                            inputProps={{ "data-testid": "signupPassword" }}
                            fullWidth={true}
                            required={true}
                        />
                    </Grid>
                    <Grid item xs={12} align="right">
                        <Button type="submit" variant="contained" color="primary" data-testid="signupSubmit" onClick={() => trigger()}>
                            Зарегистрироваться
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </TooltipComponent>
    )
}

FormSignup.propTypes = {
    fetchSignUpRequest: PropTypes.func,
    isLoggedIn: PropTypes.bool
}

const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedIn(state),
    isError: getError(state)
})

const mapDispatchToProps = { fetchSignUpRequest }

export default connect(mapStateToProps, mapDispatchToProps)(FormSignup)