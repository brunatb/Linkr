import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { UserProvider } from '../contexts/UserContext';

import Main from '../pages/Main'
import MyPosts from '../pages/MyPosts';
import TimeLine from '../pages/TimeLine';
import UserId from '../pages/UserId';
 
export default function App(){

    return(
        <UserProvider>
            <Router>
                <Switch>
                    <Route path='/timeline'>
                        <TimeLine  />
                    </Route>
                    <Route path='/my-posts'>
                        <MyPosts />
                    </Route>
                    <Route path='/user/:id'>
                        <UserId />
                    </Route>
                    <Route path='/'>
                        <Main  />
                    </Route>
                </Switch>
            </Router>
        </UserProvider>
    );
}