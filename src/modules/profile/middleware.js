export const postProfileMiddleware = async (payload) => {
    const response = await fetch(`https://loft-taxi.glitch.me/card`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
};

export const fetchProfileMiddleware = async () => {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`https://loft-taxi.glitch.me/card?token=${token}`);

    return response.json();
};