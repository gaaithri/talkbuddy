import React, { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Chat from './components/Chat/Chat.js';
import Login from './components/Login/Login';
import { useStateValue } from "./components/Provider/StateProvider";
import Emptypage from './components/EmptyPage/Emptypage';
function App() {

  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />

        ) : (
            <>
              <Header />
              <div className="app_body">
                <Sidebar />

                <Switch>
                  <Route path="/page/:title">
                    <Emptypage />
                    {/* <h2> start adding data  </h2> */}
                  </Route>
                  <Route path="/chan/:id">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1> Welcome {user.displayName} to TalkOBuddy Slack </h1>
                  </Route>
                </Switch>
              </div>
            </>)}
      </Router>

    </div>
  );
}

export default App;
