import React, { useEffect, useState } from 'react';
import './Hello.scss';
import Test from './Test/Test';
const Hello = ({ res }) => {
    // const [object, setObject] = useState(res);

    console.log('gi');
    return (
        <div className='container'>
            {/* <h1 className="hello">
                Hello <span className="world"> World</span>
            </h1>
            <Test />
            <img className="image" src='https://www.gstatic.com/devrel-devsite/prod/v85e39fe21f53c758adf6c791fb94a7a2182cff2705b3dc8ed7c59fc745471159/firebase/images/touchicon-180.png' /> */}
            <h1>{window.chatSettings && window.chatSettings.app_title}</h1>
            <iframe src="https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production" width={res.width || '600px'} height={res.height || '400px'}>
                Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
        </div>

    );
};

export default Hello;