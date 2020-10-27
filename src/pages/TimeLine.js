import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function TimeLine(){
    const {user} = useContext(UserContext);
    return(
        <h1>OI</h1>
    )
}