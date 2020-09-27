export const setLocalStorage = state => {
    localStorage.setItem('state', JSON.stringify({ state }))
}

export const getLocalStorage = () => {
    const savedState = localStorage.getItem('state')
    let storageData = savedState ? JSON.parse(savedState).state : undefined
    return storageData
}
