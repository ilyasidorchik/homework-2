import React from "react";
import Messages from 'components/Messages';
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
            event.preventDefault();
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
                    <Messages messages={messages}></Messages>
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