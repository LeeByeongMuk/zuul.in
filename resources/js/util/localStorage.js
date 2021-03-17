const getLocalStorage = (key) => {
    if (localStorage.length === 0) return;

    const data = JSON.parse(localStorage.getItem(key));
    return data;
};

const setLocalStorage = (key, value) => {
    if (!key || !value) return;

    value = JSON.stringify(value);
    localStorage.setItem(key, value);
};

export {
    getLocalStorage,
    setLocalStorage
}
