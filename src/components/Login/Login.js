import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { useStateValue } from "../Provider/StateProvider";
import { auth, provider } from "../Sidebar/firebase";
import { actionTypes } from '../Provider/reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
                alert(error.message);

            });
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp" alt="" />

                <h1> Sign in to TalkBuddy :p</h1>
                <p>talkaton.slack.com </p>
                <Button onClick={signIn}> Sign in with Google</Button>
            </div>
        </div>


    );
}

export default Login;
