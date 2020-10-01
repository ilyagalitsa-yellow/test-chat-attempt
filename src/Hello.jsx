import React from 'react';
import './Hello.scss';
import Test from './Test/Test';
const Hello = () => {
    return (
        <div className='container'>
            <h1 className="hello">
                Hello <span className="world"> World</span>
            </h1>
            <Test />
            <img className="image" src='https://www.gstatic.com/devrel-devsite/prod/v85e39fe21f53c758adf6c791fb94a7a2182cff2705b3dc8ed7c59fc745471159/firebase/images/touchicon-180.png' />
        </div>

    );
};

export default Hello;