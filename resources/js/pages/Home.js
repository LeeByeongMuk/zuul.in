import IntroSection from "@/components/IntroSection.js";
import Form from '@/components/Form.js';
import ResultSection from '@/components/ResultSection.js';
import { storeAPi } from '@/api/store.js';
import { getLocalStorage, setLocalStorage, clearLocalStorage } from '@/util/localStorage.js';
import '@sass/app.scss';

export default class Home {
    constructor($target) {
        const linkData = getLocalStorage('links') || null;
        const main = document.querySelector('#main');

        new IntroSection({
            $target: main
        });

        new Form({
            $target: main,
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

                    const textField = document.querySelector('.link-input-text');
                    resultSection.setState({
                        oldPath: textField.value,
                        ...response.data
                    });
                    alert(`${location.href}${response.data.name} 입니다.`);
                    textField.value = '';
                    setLocalStorage('links', resultSection.data);
                } catch (e) {
                    alert(e.data.message);
                }
            }
        });

        const resultSection = new ResultSection({
            $target: main,
            data: linkData,
            max: 1
        });

        $target.appendChild(main);
    }
}
