export default class Title {
    constructor({$target}) {
        this.title = document.createElement('h1');
        this.title.className = 'title';
        this.title.innerText = 'zuul.';

        const smallText = document.createElement('span');
        smallText.className = 'small';
        smallText.innerText = 'in';
        
        this.title.appendChild(smallText);
        $target.append(this.title);
    }
}
