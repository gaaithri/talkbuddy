import React, { useState, useEffect } from 'react';
import "./Chat.css";
import Message from '../Message/Message';
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../Sidebar/firebase";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../Provider/StateProvider';
import firebase from 'firebase';
function Chat() {
    const { id } = useParams();
    const [input, setInput] = useState("");
    const [channelDetails, setChannelDetails] = useState("");
    const [channelMessages, setChannelMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (id) {
            console.log(id);
            db.collection("channelgroups")
            .doc(id)
           .onSnapshot((snapshot) => 
                setChannelDetails(snapshot.data().name)
                );
             
            db.collection("channelgroups")
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot
                ((snapshot) =>
                    setChannelMessages(snapshot.docs.map((doc) => doc.data()))
                );
                } 
        

    }, [id]);
   
    const addMessage = (e) => {
        e.preventDefault();
    console.log("in Here")
        console.log(input, e)
        console.log("Input Reads >>>>>>" ,input)
        db.collection("channelgroups")
        .doc(id)
        .collection('messages')
        .add({
            message: input,
            user: user.displayName,
            newpic: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };
    console.log(channelDetails);
    console.log('Messages >>>>', channelMessages);
    return (

        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <h4 className="chat_channelName"> <strong># {channelDetails}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat_body">

                <div className="chat_messages">
                    {channelMessages.map(({ newpic, user, timestamp, message }) => (
                        <Message
                            newpic={newpic}
                            user={user}
                            timestamp={timestamp}
                            message={message}

                        />
                    ))}
                                    </div>
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form >
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={addMessage} type="submit"> Send</button>
                </form>
            </div>


        </div>

    );
}

export default Chat;
