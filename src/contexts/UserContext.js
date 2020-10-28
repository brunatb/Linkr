import { createContext } from 'react';
import React, { useState} from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props){
    const [user, setUser] = useState({});
    const [ userToken, setUserToken ] = useState({});

    console.log(userToken)
   
    return(
        <UserContext.Provider value={{user, setUser, userToken, setUserToken}}>
            {props.children}
        </UserContext.Provider>
    )
}
