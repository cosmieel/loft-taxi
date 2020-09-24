import React from 'react'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Logo } from 'loft-taxi-mui-theme';
import { FormSignup } from '../../common/form/FormSignup'
import { useStyles } from '../../styles/form'
import { useHomepageStyles } from '../../styles/homepage'

export const Signup = () => {
    const classes = useStyles();
    const classesHomepage = useHomepageStyles();

    return (
        <Paper component="section" elevation={0} square={true} className={classesHomepage.homepage} data-testid="Signup">
            <Grid container justify="center" alignItems="center" className={classesHomepage.homepage__container}>
                <Grid item xs={3}>
                    <Logo white={true} animated={true} />
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={1} className={classes.form__container}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h4" component="h1" align='left' className={classes.form__title}>
                                    Регистрация
                                </Typography>
                                <Typography component="p" align='left' className={classes.form__desc}>
                                    Уже зарегистрированы? <Link to='/login'>Войти</Link>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormSignup />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}