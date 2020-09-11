import React, { Component } from 'react'
import './App.scss';
import { Header }   from './components/common/Header/Header';
import { Login }  from './components/pages/Login/Login';
import { Signup } from './components/pages/Signup/Signup';
import { Map } from './components/pages/Map/Map';
import { Profile } from './components/pages/Profile/Profile';

export default class App extends Component {
    state = {
        activePage: 'Login'
    }

    setActivePage = (page) => {
        this.setState({ activePage: page })
    };

    render() {
        const activePage = this.state.activePage
        return (
            <div className="App">
                <Header
                    setMapLink={() => this.setActivePage('Map')}
                    setProfileLink={() => this.setActivePage('Profile')}
                    setLoginLink={() => this.setActivePage('Login')} 
                />
                <main>
                    <section>
                        {
                            activePage === 'Login' ? <Login setFormLink={() => this.setActivePage('Signup')} /> :
                            activePage === 'Signup' ? <Signup setFormLink={() => this.setActivePage('Login')}/> :
                            activePage === 'Map' ? <Map /> :
                            <Profile />
                        }
                    </section>
                </main>
            </div>
        )
    }
}