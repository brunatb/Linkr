import { createContext } from 'react';
import React, { useState} from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props){
    const [user, setUser] = useState({});
    const [ userToken, setUserToken ] = useState({});

    const [page, setPage] = useState(0);
   
    return(
        <UserContext.Provider value={{user, setUser, userToken, setUserToken, page, setPage}}>
            {props.children}
        </UserContext.Provider>
    )
}
