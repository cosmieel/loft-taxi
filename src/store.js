import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./modules";
import { getLocalStorage } from './localstorage'
import { loginFetchMiddleware, signUpFetchMiddleware } from './modules/auth/middleware'
import { profileFetchMiddleware } from './modules/profile/middleware'

const initialState = getLocalStorage()

const createRootStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(loginFetchMiddleware),
            applyMiddleware(signUpFetchMiddleware),
            applyMiddleware(profileFetchMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop
        )
    )

    return store
}

export default createRootStore;