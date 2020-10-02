import React, { useState } from 'react';
import Hello from './Hello';

const Bubble = ({ res }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log('Bubble');
    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)} style={{
                width: '50px',
                height: '50px',
                borderRadius: '5px',
                backgroundColor: 'darkblue',
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer',
                position: 'absolute',
                bottom: '5%',
                right: '5%',
                zIndex: '1000',
            }}>
                Open
        </div>
            { isOpen && <Hello res={res} />}
        </>
    );
};

export default Bubble;