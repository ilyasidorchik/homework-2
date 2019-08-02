import React from "react";
import Message from 'components/Message';
import './Chat.css';

export default class Chat extends React.Component {
    state = {
        messages: [],
        messageInput: ""
    };

    changeInputMessage = (event) => {
        this.setState({ messageInput: event.target.value });
    }

    sendMessageOnEnter = (event) => {
        const { messages, messageInput } = this.state;

        if (event.key === 'Enter') {
            this.setState({
                messages: [...messages, { text: messageInput }],
                messageInput: ""
            });
        }
    }

    render() {
        const { messages, messageInput } = this.state;

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
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                />
            </div>
        );
    }
}