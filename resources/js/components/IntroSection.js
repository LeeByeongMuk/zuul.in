export default class IntroSection {
    constructor({$target}) {
        this.section = document.createElement('article');
        this.section.className = 'intro-section';
        $target.appendChild(this.section);
        this.render();
    }

    render() {
        const title = document.createElement('h2');
        title.className = 'intro-title';
        title.innerText = 'URL 단축 서비스';
        this.section.appendChild(title);

        const description = document.createElement('p');
        description.className = 'intro-description';
        description.innerText = 'URL 단축 서비스';
        this.section.appendChild(description);
    }
}
