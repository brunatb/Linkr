import { createContext } from 'react';
import React, { useState} from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props){
    const [user, setUser] = useState('');

    return(
        <UserContext.Provider value={{user,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
