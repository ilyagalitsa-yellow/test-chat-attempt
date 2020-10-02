import React from 'react';
import { render } from 'react-dom';
import Bubble from './Bubble';
import ChatApp from './container/ChatApp';

import Hello from './Hello';


const rootName = window.chatSettings && window.chatSettings.rootName;
// let rightRoot = document.getElementById('reactRoot');
let rightRoot = document.getElementById('reactRoot');
if (rootName || !rightRoot) {
    const isBubble = !!window.chatSettings.isBubble;
    console.log(rightRoot);
    const div = document.createElement('div');
    div.id = rootName || 'reactRoot';
    console.log(document);
    document.body.appendChild(div);
    render(<ChatApp res={{ width: '', height: '' }} />, document.getElementById(div.id));
} else {
    render(<Hello res={{ width: '', height: '' }} />, rightRoot);
}

// if (!rightRoot) {
//     const div = document.createElement('div');
//     div.id = 'reactRoot';
//     console.log(document);
//     document.body.appendChild(div);
// }

// const handleBubble = () => {
//     console.log(window.chatSettings);
//     console.log(window.chatSettings.isBubble);
//     if (window.chatSettings && window.chatSettings.isBubble) {
//         render(<Bubble res={res} />, document.getElementById('reactRoot'));
//     } else {
//         render(<Hello res={res} />, document.getElementById('reactRoot'));
//     }
// };

// function Chat (action = 'init', rest){

//     res = rest;
//     handleBubble();
// };

// const q = ['fdfdf']

// Chat.__proto__.q = q;

// window.Chat = Chat;
// handleBubble();