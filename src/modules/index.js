import { combineReducers } from 'redux';
import auth from './auth'
import profile from './profile'
import address from './address'
import route from './route'

export default combineReducers({
    auth,
    profile,
    address,
    route,
});