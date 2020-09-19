import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";
import { AuthProvider } from './components/context/AuthContext'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
