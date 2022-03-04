
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';


import { Launcher } from 'react-chat-window'


import './App.css';
export default () => {


    let [name, setName] = useState('');

    let [messageList, setMessageList] = useState(JSON.parse(localStorage.getItem("usersM") || '[]'));

    const _onMessageWasSent = (message) => {
        setMessageList([...messageList, message]);
        
        localStorage.setItem('usersM', JSON.stringify(messageList));

    }



    return <div>

        <button onClick={() => {

            let userKaMessage = prompt("message ebntr kren")

            let message = {
                author: 'them',
                type: 'text',
                data: { text: userKaMessage }
            }

            setMessageList([...messageList, message]);
            localStorage.setItem('usersM', JSON.stringify(messageList));




        }}>set data</button>

        
        <h1>{name}</h1>
        <BrowserRouter>


            <Routes>

            </Routes>
        </BrowserRouter>

        <Launcher
            agentProfile={{
                teamName: 'anc',
                imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
            }}
            onMessageWasSent={_onMessageWasSent}
            messageList={messageList}
            showEmoji
        />

        
    </div>;

}

