const getLocalStorage = (key) => {
    if (localStorage.length === 0) return;
    return JSON.parse(localStorage.getItem(key));
};

const setLocalStorage = (key, value) => {
    if (!key || !value) return;

    localStorage.setItem(key, JSON.stringify(value));
};

export {
    getLocalStorage,
    setLocalStorage
}
