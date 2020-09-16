import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Logo } from 'loft-taxi-mui-theme'
import { useStyles } from './headerStyles'

export const Header = ({ setMapLink, setProfileLink, setLoginLink }) => {
    const classes = useStyles()

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar className={classes.header__inner}>
                <Typography component="p" className={classes.header__logo}>
                    <Logo animated={true} className={classes.header__logo_img}/>
                </Typography>
                <Button href="#" onClick={setMapLink}>Карта</Button>
                <Button href="#" onClick={setProfileLink}>Профиль</Button>
                <Button onClick={setLoginLink}>Выйти</Button>
            </Toolbar>
        </AppBar>
    )
}