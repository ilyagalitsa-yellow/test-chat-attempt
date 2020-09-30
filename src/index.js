import React from 'react';
import { render } from 'react-dom';

import Hello from './Hello.jsx';

// if (document.body) {
//     render(<Hello />, document.getElementById('root'));
// } else {

// }
// const getScript = (document) => {
//     console.log(document);

// };
// window.getScript = getScript;

// console.log(window.document.body);
// console.log(document.body);
// let rightRoot = document.getElementById('root');
// if (!rightRoot) { 
//     const div = document.createElement('div');
//     div.id = 'root';
//     console.log(document);
//     document.body.appendChild(div);
// }

// let wrongRoot = document.getElementById('root');
// if(!rightRoot){
//     const div = document.createElement('div');
//     div.id = 'root';
//     console.log(document);
//     document.appendChild(div);
// (function (i, s, o, g, a, m) {
//     i['GoogleAnalyticsObject'] = r;
//     i[r] = i[r] || function () {
//         (i[r].q = i[r].q || []);
//     };
// });
// }
let rightRoot = document.getElementById('root');
if (!rightRoot) { 
    const div = document.createElement('div');
    div.id = 'root';
    console.log(document);
    document.body.appendChild(div);
}
render(<Hello />, document.getElementById('root'));