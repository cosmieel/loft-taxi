import PropTypes from "prop-types";
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from '../NavLink/NavLink'
import { fetchLogout } from '../../../modules/auth'

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core/'
import { Logo } from 'loft-taxi-mui-theme'
import { useStyles } from './headerStyles'

const Header = ({ fetchLogout }) => {
    const classes = useStyles();

    const logoutHandler = async () => {
        await fetchLogout();

        localStorage.clear();
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
                    data-testid='mapLink'
                >Карта</Button>
                <Button
                    className={classes.header__link}
                    component={NavLink}
                    to='/profile'
                    data-testid='profileLink'
                >Профиль</Button>

                <Button
                    onClick={logoutHandler}
                    className={classes.header__link}
                    data-testid='logoutLink'
                >Выйти</Button>

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