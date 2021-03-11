export default class Main {
    constructor($target) {
        // title
        this.title = document.createElement('h1');
        this.title.className = 'title';

        for (let i = 0; i < 4; i++) {
            const titleText = document.createElement('span');
            titleText.className = 'text';
            titleText.classList.add(`text-${i + 1}`);
            titleText.innerText = 'F';
            this.title.append(titleText);
        }

        this.form = document.createElement('article');
        this.form.className = 'form';

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

        $target.append(this.title);
        $target.append(this.form);
    }
}
