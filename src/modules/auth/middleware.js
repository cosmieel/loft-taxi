export const authRequestMiddleware = async (payload, path) => {
    const response = await fetch(`https://loft-taxi.glitch.me/${path}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.json();
};

export const setToken = token => window.localStorage.setItem('token', token)
export const removeToken = () => window.localStorage.removeItem('token')