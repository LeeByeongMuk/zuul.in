export default class ResultSection {
    constructor({$target, data = [], max = 1}) {
        this.data = data;
        this.max = max;

        this.section = document.createElement('article');
        this.section.className = 'result-section';

        $target.append(this.section);
        this.render();
    }

    setState(data) {
        if (!data) return;
        if (this.data.length === this.max) this.data.pop();

        this.data.unshift(data);
        this.render();
    }

    copyClipboard(e) {
        const name = e.target.dataset.name;
        if (!name) return;

        const textarea = document.createElement('textarea');
        textarea.value = `${location.href}${e.target.dataset.name}`;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');
        alert('복사 되었습니다.');
        document.body.removeChild(textarea);
    }

    render() {
        if (!this.data.length) return;

        this.section.innerHTML = '';

        const resultList = document.createElement('ul');
        resultList.className = 'result-list';
        resultList.addEventListener('click', this.copyClipboard);

        this.data.forEach(obj => {
            const li = document.createElement('li');
            const innerWrap = document.createElement('div');
            innerWrap.className = 'result-list-item';

            const urlData = document.createElement('p');
            urlData.className = 'url-data';
            urlData.innerText = `${location.href}${obj.name}`;

            const copyButton = document.createElement('button');
            copyButton.type = 'button';
            copyButton.className = 'copy-btn';
            copyButton.dataset.name = obj.name;
            copyButton.innerText = '복사하기';

            innerWrap.append(urlData);
            innerWrap.append(copyButton);
            li.append(innerWrap);
            resultList.append(li);
        });

        this.section.append(resultList);
    }
}
