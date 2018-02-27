/*"test": "echo \"Error: no test specified\" && exit 1",*/
import './index.less';
import {wordsToSentence} from './utils/utils';
var el=document.createElement('div'),
    text=document.createTextNode(
        wordsToSentence('welcome','to','my','webpack'));
el.appendChild(text);
el.id="app";
document.body.appendChild(el);
