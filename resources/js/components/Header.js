import Title from '@/components/Title.js';

export default class Header {
    constructor({$target}) {
        this.header = document.createElement('header');
        this.header.className = 'header';

        new Title({
            $target: this.header
        });

        $target.appendChild(this.header);
    }
}
