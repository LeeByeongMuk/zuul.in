import Title from './components/Title.js';
import Form from './components/Form.js';

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
                        alert(`${location.href}${response.data.name} 입니다.`);
                    } else {
                        throw response;
                    }
                } catch (e) {
                    console.log(e);
                    alert(e.data.message);
                }
            }
        });
    }
}
