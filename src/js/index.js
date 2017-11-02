import '../css/style.less';
// require("../assert/stylesheets/_bootstrap.scss");
/*import { wordsToSentence } from './utils';

var el = document.createElement('div'),
     text = document.createTextNode(
        wordsToSentence('Welcome', 'to', 'my', 'app!')
    );
el.appendChild(text);
document.body.appendChild(el);




let {name,introduce,depart,email,remarks} =
{
    name:"2",
    introduce:"3",
    depart:"4",
    email:"5",
    remarks:"6"
};*/


import Vue from 'vue'
import App from '../App';

new Vue({
    render: h => h(App)
}).$mount('#app');




