import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./modules";
import { getLocalStorage } from './localstorage'
import { rootSaga } from './modules/rootSaga'

const initialState = getLocalStorage()
const sagaMiddleware = createSagaMiddleware()

const createRootStore = () => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop
        )
    )

    sagaMiddleware.run(rootSaga)

    return store
}

export default createRootStore;