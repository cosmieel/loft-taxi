import React from 'react'
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import 'fontsource-roboto';
import './App.scss';
import Header from './components/common/Header/Header'
import { Login } from './components/pages/Login/Login';
import { Signup } from './components/pages/Signup/Signup';
import { Map } from './components/pages/Map/Map';
import { ProfilePage } from './components/pages/Profile/';
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

            {isLoggedIn && <Header />}

            <main>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <PrivateRoute exact path="/map" component={Map} />
                    <PrivateRoute exact path="/profile" component={ProfilePage} />
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