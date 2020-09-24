import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import 'fontsource-roboto';
import './App.scss';
import { Login }  from './components/pages/Login/Login';
import { Signup } from './components/pages/Signup/Signup';
import { Map } from './components/pages/Map/Map';
import { Profile } from './components/pages/Profile/Profile';
import { PrivateRoute } from './components/common/PrivateRoute/PrivateRoute'

export default class App extends Component {
    render() {
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
}