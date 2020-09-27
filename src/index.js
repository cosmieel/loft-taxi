import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App'
import { theme } from 'loft-taxi-mui-theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import * as serviceWorker from './serviceWorker'
import createStore from './store'
import { Provider } from 'react-redux'
import { setLocalStorage } from './localstorage'

const store = createStore();

store.subscribe(() => {
    setLocalStorage({
        isLoggedIn: store.getState().isLoggedIn,
        profile: store.getState().profile,
    });
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </MuiThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
