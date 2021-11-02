export default class Form {
    constructor({$target, onClick}) {
        this.onClick = onClick;

        this.form = document.createElement('article');
        this.form.className = 'form';

        $target.append(this.form);

        this.render();
    }

    inputFocus() {
        const input = document.querySelector('.input-text');
        input.focus();
    }

    render() {
        const textField = document.createElement('input');
        textField.type = 'text';
        textField.className = 'input';
        textField.classList.add('input-text');
        textField.placeholder = 'Link';

        textField.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.onClick(textField.value);
            }
        })

        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.className = 'input';
        submitBtn.classList.add('input-submit');
        submitBtn.innerText = 'Shorten';

        submitBtn.addEventListener('click', () => {
            this.onClick(textField.value);
        });

        this.form.append(textField);
        this.form.append(submitBtn);

        this.inputFocus();
    }
}
