export const fetchRouteMiddleware = async (action) => {
    const response = await fetch(`https://loft-taxi.glitch.me/route?address1=${action.payload.from}&address2=${action.payload.to}`);

    return response.json();
}