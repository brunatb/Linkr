import { createContext } from 'react';
import React, { useState} from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props){
    const [user, setUser] = useState({});
    const [ userToken, setUserToken ] = useState({});

    const [page, setPage] = useState(1);
    const [moreLoad, setMoreLoad] = useState (10);
   
    return(
        <UserContext.Provider value={{user, setUser, userToken, setUserToken, page, setPage, moreLoad, setMoreLoad}}>
            {props.children}
        </UserContext.Provider>
    )
}
