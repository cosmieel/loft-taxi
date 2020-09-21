import PropTypes from "prop-types";
import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Logo } from 'loft-taxi-mui-theme'
import { useStyles } from './headerStyles'
import { AuthContext } from '../../context/AuthContext'

export const Header = ({ setHeaderLink }) => {
    const classes = useStyles();
    const { logout } = useContext(AuthContext);

    const logoutHandler = async() => {
        await logout();
        setHeaderLink();
    }

    const NAV = [
        { nav: 'Map', text: 'Карта' },
        { nav: 'Profile', text: 'Профиль' },
        { nav: 'Login', text: 'Выйти' }, 
    ]

    return (
        <AppBar position="static" className={classes.header} data-testid='Header'>
            <Toolbar className={classes.header__inner}>
                <Typography component="p" className={classes.header__logo}>
                    <Logo animated={true} className={classes.header__logo_img}/>
                </Typography>
                {
                    NAV.map(({ nav, text }) => (
                        <Button 
                            href="#" 
                            onClick={() => nav === 'Login' ? logoutHandler(nav) : setHeaderLink(nav)} 
                            key={nav}
                        >{text}
                        </Button>
                    ))
                }

            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    setHeaderLink: PropTypes.func,
};