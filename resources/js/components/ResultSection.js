export default class ResultSection {
    constructor({$target, data = null, max = 1}) {
        this.data = data;
        this.max = max;

        this.section = document.createElement('article');
        this.section.className = 'result-section';

        $target.appendChild(this.section);
        this.render();
    }

    setState(data) {
        if (!data) return;

        this.data = {
            ...data
        };
        this.render();
    }

    copyClipboard(e) {
        const name = e.target.dataset.name;
        if (!name) return;

        const textarea = document.createElement('textarea');
        textarea.value = `${location.href}${e.target.dataset.name}`;
        document.body.appendChildChild(textarea);

        textarea.select();
        document.execCommand('copy');
        alert('복사 되었습니다.');
        document.body.removeChild(textarea);
    }

    render() {
        if (!this.data) return;
        this.section.innerHTML = '';
        const {oldPath, name} = this.data;

        const resultWrap = document.createElement('div');
        resultWrap.className = 'result-wrap';
        resultWrap.addEventListener('click', this.copyClipboard);

        const innerWrap = document.createElement('div');
        innerWrap.className = 'result-list-item';
        resultWrap.appendChild(innerWrap);

        const originPath = document.createElement('span');
        originPath.className = 'origin-path';
        originPath.innerText = oldPath;
        innerWrap.appendChild(originPath);

        const pathWrap = document.createElement('div');
        pathWrap.className = 'path-wrap'
        innerWrap.appendChild(pathWrap);

        const path = `${location.href}${name}`;
        const transformPath = document.createElement('a');
        transformPath.href = path;
        transformPath.className = 'transform-path';
        transformPath.innerText = path
        pathWrap.appendChild(transformPath);

        const copyButton = document.createElement('button');
        copyButton.type = 'button';
        copyButton.className = 'copy-btn';
        copyButton.dataset.name = name;
        copyButton.innerText = '복사하기';
        pathWrap.appendChild(copyButton);

        this.section.appendChild(resultWrap);
    }
}
