import './bootstrap';
import Header from "@/components/Header.js";
import Home from './pages/Home.js';
import 'normalize.css';

// TODO:
const $target = document.querySelector('.app');
new Header({
    $target
});

const main = document.createElement('main');
main.id = 'main';
document.querySelector('.app').appendChild(main);

new Home($target);
