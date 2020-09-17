import PropTypes from "prop-types";
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useStyles } from '../../styles/form'

export const FormLogin = ({ setSubmit }) => {
    const classes = useStyles();

    return (
        <form>
            <Grid container >
                <Grid item xs={12}>
                    <TextField id="email" label="Имя пользователя" fullWidth={true} required={true} className={classes.form__field} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password" label="Пароль" fullWidth={true} required={true} className={classes.form__field} />
                </Grid>
                <Grid item xs={12} align="right">
                    <Button type="submit" variant="contained" color="primary" onClick={setSubmit}>
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