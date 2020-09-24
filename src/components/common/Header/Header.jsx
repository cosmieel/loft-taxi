import PropTypes from "prop-types";
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Logo } from 'loft-taxi-mui-theme'
import { useStyles } from './headerStyles'
import { AuthContext } from '../../context/AuthContext'

export const Header = () => {
    const classes = useStyles();
    const { logout } = useContext(AuthContext);

    const logoutHandler = async() => {
        await logout();

        localStorage.clear();
    }

    return (
        <AppBar position="static" className={classes.header} data-testid='Header'>
            <Toolbar className={classes.header__inner}>
                <Typography component="p" className={classes.header__logo}>
                    <Logo animated={true} className={classes.header__logo_img}/>
                </Typography>

                <Button className={classes.header__link}>
                    <Link to="/map">Карта</Link>
                </Button>
                <Button className={classes.header__link}>
                    <Link to="/profile">Профиль</Link>
                </Button>
                <Button className={classes.header__link}>
                    <a href="/" onClick={logoutHandler}>
                        Выйти
                    </a>
                </Button>

            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    setHeaderLink: PropTypes.func,
};