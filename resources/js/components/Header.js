export default class Header {
    constructor() {
        this.header = document.createElement('header');
        this.header.className = 'header';
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

        return this.header;
    }
}
