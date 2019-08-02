import React from "react";
import Message from 'components/Message';

export default class Messages extends React.Component {
    render() {
        return (
            <div className="messages">
                {this.props.messages.map((message, index) => (
                    <Message key={message.text + index} text={message.text}></Message>
                ))}
            </div>
        );
    }
}