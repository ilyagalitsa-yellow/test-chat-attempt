import React from 'react';
import { render } from 'react-dom';

import Hello from './Hello.jsx';

let rightRoot = document.getElementById('root');
if (!rightRoot) { 
    const div = document.createElement('div');
    div.id = 'root';
    console.log(document);
    document.body.appendChild(div);
}
render(<Hello />, document.getElementById('root'));