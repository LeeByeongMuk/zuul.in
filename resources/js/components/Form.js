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
                const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

                const response = await fetch('/store', {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        "X-CSRF-Token": token
                    },
                    method: 'post',
                    body: JSON.stringify({
                        url: textField.value
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    alert(`${location.href}${data.name} 입니다.`);
                } else {
                    throw 'error';
                }
            } catch (e) {
                alert('오류');
                console.log(e);
            }
        });

        this.form.append(textField);
        this.form.append(submitBtn);
    }

}
