export default class Header {
    constructor({$target}) {
        this.header = document.createElement('header');
        this.header.className = 'header';
        $target.appendChild(this.header);
        this.render();
    }

    render() {
        const title = document.createElement('h1');
        title.className = 'title';
        title.innerText = 'zuul.';

        const smallText = document.createElement('span');
        smallText.className = 'small';
        smallText.innerText = 'in';

        title.appendChild(smallText);
        this.header.appendChild(title);
    }
}
