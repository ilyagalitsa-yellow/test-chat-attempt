import React, { useEffect, useState } from 'react';
import Bubble from '../Bubble';
import Hello from '../Hello';
// тут можно сделать хук для парса аргументов
const ChatApp = ({ res }) => {
    const [argumentsArray, setArgumentsArray] = useState(Chat.q);

    // единственный вар, который смог придумать, чтоб получать обновления Chat.q
    useEffect(() => {
        const func = (e) =>
            setArgumentsArray([...e.detail]);
        window.addEventListener("chatEvent", func);
        return () => {
            window.removeEventListener("chatEvent", func);
        };
    }, []);

// в разработке
    const [isBubble, setBubble] = useState(!!window.chatSettings.isBubble);

    console.log(argumentsArray);

    // todo method that creates object from args
    // const [commands, setCommands] = useState(argumentsArray.map(argument => {
    //     const args = [...argument];
    //     const arg = { command: '', parameters: {} };
    //     if (args.length > 1) {
    //         arg.command = args[0];
    //         // arg.parameters = [...args.slice(1, args.length - 1)];
    //         arg.parameters = args[1];
    //     } else {
    //         arg.command = args[0];
    //     }
    //     return arg;
    // }));
    return (
        <div>
            {isBubble ? <Bubble res={res} /> : <Hello res={res} />}
        </div>
    );
};

export default ChatApp;