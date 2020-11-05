import { createContext } from 'react';
import React, { useState} from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props){

    const initialTokenState = localStorage.getItem("tokenObject") && JSON.parse(localStorage.getItem("tokenObject")).token;

    const initialUserState = localStorage.getItem("tokenObject") && JSON.parse(localStorage.getItem("tokenObject")).user;

    const [ userToken, setUserToken ] = useState(initialTokenState);
    const [user, setUser] = useState(initialUserState);

    const token = {headers: {"user-token": userToken}}




    const [page, setPage] = useState(0);

   
    return(
        <UserContext.Provider value={{user, setUser, userToken, setUserToken, page, setPage, token}}>
            {props.children}
        </UserContext.Provider>
    )
} 
