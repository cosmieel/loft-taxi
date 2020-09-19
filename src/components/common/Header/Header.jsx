import PropTypes from "prop-types";
import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Logo } from 'loft-taxi-mui-theme'
import { useStyles } from './headerStyles'
import { AuthContext } from '../../context/AuthContext'

export const Header = ({ setMapLink, setProfileLink, setLoginLink }) => {
    const classes = useStyles();
    const { logout, isLoggedIn } = useContext(AuthContext);

    const logoutHandler = () => {
        logout();
        !isLoggedIn && setLoginLink();
    }

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar className={classes.header__inner}>
                <Typography component="p" className={classes.header__logo}>
                    <Logo animated={true} className={classes.header__logo_img}/>
                </Typography>
                <Button href="#" onClick={setMapLink}>Карта</Button>
                <Button href="#" onClick={setProfileLink}>Профиль</Button>
                <Button onClick={logoutHandler}>Выйти</Button>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    setMapLink: PropTypes.func,
    setProfileLink: PropTypes.func,
    setLoginLink: PropTypes.func,
};