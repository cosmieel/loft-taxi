import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useStyles } from '../../styles/form'

export const FormSignup = () => {
    const classes = useStyles();
    
    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="email" label="Адрес электронной почты" fullWidth={true} required={true} className={classes.form__field} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="name" label="Имя" fullWidth={true} required={true} className={classes.form__field} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="surname" label="Фамилия" fullWidth={true} required={true} className={classes.form__field} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password" label="Пароль" fullWidth={true} required={true} className={classes.form__field} />
                </Grid>
                <Grid item xs={12} align="right">
                    <Button type="submit" variant="contained" color="primary">
                        Войти
                    </Button>
                </Grid>
            </Grid>

            
        </form>
    );
};