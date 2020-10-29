import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { UserProvider } from '../contexts/UserContext';
import Container from './Container';


 
export default function App(){

    return(
        <UserProvider>
            <Router>
                <Container />
            </Router>
        </UserProvider>
    );
}