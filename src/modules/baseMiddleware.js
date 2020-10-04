export const BASE_URL = 'https://loft-taxi.glitch.me/'
export const setToken = token => window.localStorage.setItem('token', token)
export const removeToken = () => window.localStorage.removeItem('token')

export const middlewarePOST = async (payload, path) => {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return response.json()
}

export const middlewareGET = async (path) => {
    const response = await fetch(`${BASE_URL}${path}`);

    return response.json();
}
export const middlewareRouteGET = async (action) => {
    const response = await fetch(`${BASE_URL}route?address1=${action.payload.from}&address2=${action.payload.to}`);

    return response.json();
}