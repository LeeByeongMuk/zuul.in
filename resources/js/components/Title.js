export default class Title {
    constructor({$target}) {
        this.title = document.createElement('h1');
        this.title.className = 'title';

        $target.append(this.title);

        this.render();
    }

    render() {
        for (let i = 0; i < 4; i++) {
            const titleText = document.createElement('span');
            titleText.className = 'text';
            titleText.classList.add(`text-${i + 1}`);
            titleText.innerText = 'F';
            this.title.append(titleText);
        }
    }

}
