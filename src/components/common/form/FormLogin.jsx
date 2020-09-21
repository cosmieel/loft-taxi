import PropTypes from "prop-types";
import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useStyles } from '../../styles/form'
import { AuthContext } from '../../context/AuthContext'

export const FormLogin = ({ setSubmit }) => {
    const classes = useStyles();
    const { login } = useContext(AuthContext);

    const submit = async(event) => {
        event.preventDefault();
        const { email, password } = event.target;
        await login(email.value, password.value);

        setSubmit();
    }

    return (
        <form onSubmit={submit}>
            <Grid container >
                <Grid item xs={12}>
                    <TextField id="email" label="Имя пользователя" fullWidth={true} required={true} className={classes.form__field} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password" label="Пароль"type="password" fullWidth={true} required={true} className={classes.form__field} />
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
    setSubmit: PropTypes.func,
};