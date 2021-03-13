const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const storeURL = '/store';

const request = async (url, options) => {
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-Token": token
            },
            method: options.method,
            body: options.body
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw errorData;
        }
    } catch (e) {
        throw {
            message: e.message
        };
    }
};

const storeAPi = async (options) => {
    try {
        const response = await request(storeURL, {
            method: 'post',
            body: JSON.stringify(options)
        });

        return {
            isError: false,
            data: response
        };
    } catch (e) {
        return {
            isError: true,
            data: e
        };
    }
};

export {
    storeAPi
};
