export const getLocalStorage = () => {
    try {
        const savedState = localStorage.getItem('state');
        if (savedState === null) {
            return undefined;
        }
        return JSON.parse(savedState);
    } catch (err) {
        return undefined;
    }
};

export const setLocalStorage = (state) => {
    try {
        const savedState = JSON.stringify(state);
        localStorage.setItem('state', savedState);
    } catch {
    }
}