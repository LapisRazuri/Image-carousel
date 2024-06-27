import './style.css';
import { button } from './dom.js';
import { nextImg } from './next.js';
import { display } from './hidden.js';
// import Icon from './icon.png';



button.addEventListener( 'click', function () {
    const nextIndex = nextImg();
    display(nextIndex);
} );


