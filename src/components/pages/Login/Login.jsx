import React from 'react'
import FormLogin from '../../common/form/FormLogin'
import { NavLink } from '../../common/NavLink/NavLink'

import { Grid, Paper, Typography, Link } from '@material-ui/core/'
import { Logo } from 'loft-taxi-mui-theme';
import { useStyles } from '../../styles/form'
import { useHomepageStyles } from '../../styles/homepage'

export const Login = () => {
    const classes = useStyles();
    const classesHomepage = useHomepageStyles();

    return (
        <Paper component="section" elevation={0} square={true} className={classesHomepage.homepage} data-testid="Login">
            <Grid container justify="center" alignItems="center" className={classesHomepage.homepage__container}>
                <Grid item xs={3}>
                    <Logo white={true} animated={true} />
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={1} className={classes.form__container}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="h4" component="h1" align='left' className={classes.form__title}>
                                    Войти
                                </Typography>
                                <Typography component="p" align='left' className={classes.form__desc}>
                                    Новый пользователь? <Link to="/signup" component={NavLink} data-testid="signupLink">Зарегистрируйтесь</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormLogin />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}