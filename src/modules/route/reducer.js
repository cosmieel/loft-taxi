import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
	fetchRouteRequest,
	fetchRouteSuccess,
	fetchRouteFailure,
	fetchRouteReset
} from './actions'

const route = handleActions(
	{
		[fetchRouteRequest]: () => [],
		[fetchRouteSuccess]: (_state, action) => action.payload,
		[fetchRouteFailure]: () => [],
		[fetchRouteReset]: () => []
	},
	[]
)

const isOrderAccepted = handleActions(
	{
		[fetchRouteRequest]: () => false,
		[fetchRouteSuccess]: () => true,
		[fetchRouteFailure]: () => false,
		[fetchRouteReset]: () => false
	},
	false
)

const error = handleActions(
	{
		[fetchRouteRequest]: () => null,
		[fetchRouteSuccess]: () => null,
		[fetchRouteFailure]: (_state, action) => action.payload,
		[fetchRouteReset]: () => null
	},
	null
)

export default combineReducers({
	route,
	error,
	isOrderAccepted
})
