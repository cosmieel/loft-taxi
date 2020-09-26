import {
    fetchProfileRequest,
    fetchProfileSuccess,
    fetchProfileFailure
} from './actions'

export const profileFetchMiddleware = store => next => action => {
    if (action.type === fetchProfileRequest.toString()) {
        return fetch('https://loft-taxi.glitch.me/card', {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (!data.success) {
                    throw Error(data)
                }
                return data
            })
            .then(data => {
                store.dispatch(fetchProfileSuccess(action.payload))
                return data
            })
            .catch(error => {
                store.dispatch(fetchProfileFailure(error))
            })
    }
    return next(action)
}