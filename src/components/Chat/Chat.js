import React, { useState } from "react";
import Message from 'components/Message';
import './Chat.css';

const Chat = (props) => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    const changeInputMessage = (event) => {
        setMessageInput(event.target.value);
    };

    const sendMessageOnEnter = (event) => {
        if (event.key === 'Enter') {
            setMessages([...messages, { messageInput } ]);
            setMessageInput('');
        }
    };

    return (
        <div className="chat">
            <div className="message-list">
                <div className="messages">
                    {messages.map((message, index) => (
                        <Message key={message.text + index} text={message.text}></Message>
                    ))}
                </div>
            </div>
            
            <input
                type="text"
                value={messageInput}
                className="input-message"
                onChange={changeInputMessage}
                onKeyPress={sendMessageOnEnter}
            />
        </div>
    );
};

export default Chat;