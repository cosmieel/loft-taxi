import PropTypes from "prop-types";
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from '../NavLink/NavLink'
import { fetchLogout } from '../../../modules/auth'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Logo } from 'loft-taxi-mui-theme'
import { useStyles } from './headerStyles'

const Header = ({ fetchLogout }) => {
    const classes = useStyles();

    const logoutHandler = async () => {
        await fetchLogout();

        window.localStorage.clear();
    }

    return (
        <AppBar position="static" className={classes.header} data-testid='Header'>
            <Toolbar className={classes.header__inner}>
                <Typography component="p" className={classes.header__logo}>
                    <Logo animated={true} className={classes.header__logo_img} />
                </Typography>

                <Button
                    className={classes.header__link}
                    component={NavLink}
                    to='/map'
                >Карта</Button>
                <Button
                    className={classes.header__link}
                    component={NavLink}
                    to='/profile'
                >Профиль</Button>

                <Button onClick={logoutHandler} className={classes.header__link}>Выйти</Button>

            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    fetchLogout: PropTypes.func
};

const mapStateToProps = state => state
const mapDispatchToProps = { fetchLogout }

export default connect(mapStateToProps, mapDispatchToProps)(Header)