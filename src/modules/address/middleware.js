export const fetchAddressMiddleware = async () => {
    const response = await fetch(`https://loft-taxi.glitch.me/addressList`);

    return response.json();
}