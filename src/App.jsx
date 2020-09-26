import React from 'react'
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import 'fontsource-roboto';
import './App.scss';
import { Login } from './components/pages/Login/Login';
import { Signup } from './components/pages/Signup/Signup';
import { Map } from './components/pages/Map/Map';
import { Profile } from './components/pages/Profile/Profile';
import { getIsLoggedIn } from './modules/auth'


const App = ({ isLoggedIn }) => {

    const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
        console.log(isLoggedIn);

        return (
            <Route
                {...rest}
                render={props =>
                    isLoggedIn
                        ? <RouteComponent {...props} />
                        : <Redirect to="/login" />
                }
            />
        )
    }

    return (
        <div className="App">
            <main>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRoute exact path="/map" component={Map} />
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <Redirect to="/map" />
                </Switch>
            </main>
        </div>
    )

}

App.propTypes = {
	isLoggedIn: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoggedIn: getIsLoggedIn(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);