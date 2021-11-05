export default class Footer {
    constructor() {
        this.footer = document.createElement('footer');
        this.footer.className = 'footer';
    }

    render() {
        const description = document.createElement('p');
        description.className = 'footer-description';
        description.innerText = 'Team gongbok';
        this.footer.appendChild(description);

        return this.footer;
    }
}
