import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { EditProvider } from '../contexts/EditContext';
import { UserProvider } from '../contexts/UserContext';
import Container from './Container';


 
export default function App(){

    return(
        <UserProvider>
            <EditProvider>
                <Router>
                    <Container />
                </Router>
            </EditProvider>
        </UserProvider>
    );
}