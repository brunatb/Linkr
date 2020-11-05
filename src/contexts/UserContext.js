import { createContext } from 'react';
import React, { useState} from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props){

    const initialTokenState = localStorage.getItem("tokenObject") && JSON.parse(localStorage.getItem("tokenObject")).token;

    const initialUserState = localStorage.getItem("tokenObject") && JSON.parse(localStorage.getItem("tokenObject")).user;

    const token = {headers: {"user-token": initialTokenState}}
    const [ userToken, setUserToken ] = useState(token);
    const [user, setUser] = useState(initialUserState);




    const [page, setPage] = useState(0);

   
    return(
        <UserContext.Provider value={{user, setUser, userToken, setUserToken, page, setPage}}>
            {props.children}
        </UserContext.Provider>
    )
} 
