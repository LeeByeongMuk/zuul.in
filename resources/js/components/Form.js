export default class Form {
    constructor({$target, onClick}) {
        this.onClick = onClick;

        this.form = document.createElement('article');
        this.form.className = 'link-form';

        $target.append(this.form);
        this.render();
    }

    inputFocus() {
        const input = document.querySelector('.link-input-text');
        input.focus();
    }

    render() {
        const wrap = document.createElement('div');
        wrap.className = 'link-form-wrap';

        const textField = document.createElement('input');
        textField.type = 'text';
        textField.className = 'link-form-input';
        textField.classList.add('link-input', 'link-input-text');
        textField.placeholder = '주소를 입력해 주세요 (ex: http://google.com)';

        textField.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.onClick(textField.value);
            }
        });

        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.className = 'input';
        submitBtn.classList.add('link-input', 'link-input-submit');
        submitBtn.innerText = 'Shorten';

        submitBtn.addEventListener('click', () => {
            this.onClick(textField.value);
        });

        wrap.appendChild(textField);
        wrap.appendChild(submitBtn);
        this.form.append(wrap);
        this.inputFocus();
    }
}
