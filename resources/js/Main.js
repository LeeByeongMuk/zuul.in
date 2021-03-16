import Title from './components/Title.js';
import Form from './components/Form.js';
import ResultSection from './components/ResultSection.js';

import { storeAPi } from './api/store.js';

export default class Main {
    constructor($target) {
        const title = new Title({
            $target
        });

        const form = new Form({
            $target,
            onClick: async value => {
                try {
                    const response = await storeAPi({
                        url: value
                    });

                    if (!response.isError) {
                        resultSection.setState(response.data);
                        alert(`${location.href}${response.data.name} 입니다.`);
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
            data: []
        })
    }
}
