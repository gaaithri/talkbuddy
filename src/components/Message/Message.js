import React from 'react';
import "./Message.css";
function Message({ newpic, user, timestamp, message }) {
    return (
        <div className="message">
            <img src={newpic} alt="" />
            <div className="message_info">
                <h4 className="message_user">
                    {user}
                    <span className="message_timestamp">   {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
              <p className="message_message">
               {message} </p>
               
            </div>

        </div>

    );
}

export default Message;
