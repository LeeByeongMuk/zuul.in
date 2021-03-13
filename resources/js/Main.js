import Title from './components/Title.js';
import Form from './components/Form.js';

export default class Main {
    constructor($target) {
        const title = new Title({
            $target
        });

        const form = new Form({
            $target
        });
    }
}
