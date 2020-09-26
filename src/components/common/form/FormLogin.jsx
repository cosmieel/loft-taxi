import React, { useState } from 'react'
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Button, TextField } from '@material-ui/core/'
import { useStyles } from '../../styles/form'
import { getIsLoggedIn, getError, fetchLoginRequest } from "../../../modules/auth"

const FormLogin = ({ fetchLoginRequest, isLoggedIn }) => {
    const classes = useStyles();

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        await fetchLoginRequest(userData)
    }

    const onInputChange = e => {
        let input = e.target;
        setUserData({
            ...userData,
            [input.name]: input.value
        });
    }

    if (isLoggedIn) return <Redirect to="/map" />

    return (
        <form onSubmit={onSubmit}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label="Имя пользователя"
                        value={userData.email}
                        onChange={onInputChange}
                        inputProps={{ "data-testid": "inputName" }}
                        fullWidth={true}
                        required={true}
                        className={classes.form__field} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        label="Пароль"
                        value={userData.password}
                        onChange={onInputChange}
                        inputProps={{ "data-testid": "inputPassword" }}
                        fullWidth={true}
                        required={true}
                        className={classes.form__field} />
                </Grid>
                <Grid item xs={12} align="right">
                    <Button type="submit" variant="contained" color="primary" >
                        Войти
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

FormLogin.propTypes = {
    fetchLoginRequest: PropTypes.func,
    isLoggedIn: PropTypes.bool
}

const mapStateToProps = state => ({
    isLoggedIn: getIsLoggedIn(state),
    error: getError(state)
});

const mapDispatchToProps = { fetchLoginRequest };

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);