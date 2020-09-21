import React, { Component } from 'react'
import 'fontsource-roboto';
import './App.scss';
import { Header } from './components/common/Header/Header';
import { Login }  from './components/pages/Login/Login';
import { Signup } from './components/pages/Signup/Signup';
import { Map } from './components/pages/Map/Map';
import { Profile } from './components/pages/Profile/Profile';
import { AuthContext } from './components/context/AuthContext'

const PAGES = {
    Login: (prop) => <Login setFormLink={() => prop.setActivePage('Signup')} setSubmit={() => prop.setActivePage('Map')} />,
    Signup: (prop) => <Signup setFormLink={() => prop.setActivePage('Login')} setSubmit={() => prop.setActivePage('Map')} />,
    Map: (prop) => <Map />,
    Profile: (prop) => <Profile />
}

export default class App extends Component {
    static contextType = AuthContext
    
    state = {
        activePage: 'Login'
    }

    setActivePage = (page) => {
        const { isLoggedIn } = this.context;

        if (isLoggedIn) {
            this.setState({ activePage: page })
        } else {
            this.state.activePage !== 'Login' ? this.setState({ activePage: 'Login' }) : this.setState({ activePage: 'Signup' })
        }

        console.log(isLoggedIn);
    };

    render() {
        const activePage = this.state.activePage
        const isLoggedInPages = activePage === 'Login' || activePage === 'Signup'

        return (
            <div className="App">
                {(!isLoggedInPages) && <Header setHeaderLink={this.setActivePage} />}
                
                <main>
                    <section>
                        {PAGES[activePage](this)}
                    </section>
                </main>
            </div>
        )
    }
}