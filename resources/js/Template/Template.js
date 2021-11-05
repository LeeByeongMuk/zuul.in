import Header from "@/components/Header.js";
import Footer from "@/components/Footer.js";

export default class Template {
    constructor({$target}) {
        this.$target = $target;
        this.header = new Header();
        this.footer = new Footer();
        this.main = document.createElement('main');
        this.main.id = 'main';
        this.render();
    }

    getTarget() {
        return this.main;
    }

    render() {
        this.$target.innerHTML = '';
        this.$target.appendChild(this.header.render());
        this.$target.appendChild(this.main);
        this.$target.appendChild(this.footer.render());
    }
}
