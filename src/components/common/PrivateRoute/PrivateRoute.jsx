import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);

    console.log(isLoggedIn);

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? <Component {...props} /> : <Redirect to="/signup" />
            }
        />
    );
};