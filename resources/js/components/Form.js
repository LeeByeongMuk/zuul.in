import { storeAPi } from '../api/store.js';

export default class Form {
    constructor({$target}) {
        this.form = document.createElement('article');
        this.form.className = 'form';

        $target.append(this.form);

        this.render();
    }

    render() {
        const textField = document.createElement('input');
        textField.type = 'text';
        textField.className = 'input';
        textField.classList.add('input-text');
        textField.placeholder = 'Link';

        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.className = 'input';
        submitBtn.classList.add('input-submit');
        submitBtn.innerText = 'Shorten';

        submitBtn.addEventListener('click', async () => {
            try {
                const response = await storeAPi({
                    url: textField.value
                });

                if (!response.isError) {
                    alert(`${location.href}${response.data.name} 입니다.`);
                } else {
                    throw response;
                }
            } catch (e) {
                alert(e.data.message);
            }
        });

        this.form.append(textField);
        this.form.append(submitBtn);
    }

}
