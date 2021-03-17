import Title from './components/Title.js';
import Form from './components/Form.js';
import ResultSection from './components/ResultSection.js';

import { storeAPi } from './api/store.js';
import { getLocalStorage, setLocalStorage } from './util/localStorage.js';

export default class Main {
    constructor($target) {
        const linkData = getLocalStorage('links') || [];

        const title = new Title({
            $target
        });

        const form = new Form({
            $target,
            onClick: async value => {
                const regex = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/;

                if (!regex.test(value)) {
                    alert('입력한 URL 형식을 확인해주세요.');
                    return;
                }

                try {
                    const response = await storeAPi({
                        url: value
                    });

                    if (!response.isError) {
                        const textField = document.querySelector('.input-text');

                        resultSection.setState(response.data);
                        alert(`${location.href}${response.data.name} 입니다.`);
                        textField.value = '';
                        setLocalStorage('links', resultSection.data);
                    } else {
                        throw response;
                    }
                } catch (e) {
                    alert(e.data.message);
                }
            }
        });

        const resultSection = new ResultSection({
            $target,
            data: linkData
        })
    }
}
