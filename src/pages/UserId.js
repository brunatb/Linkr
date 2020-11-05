import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import SectionFiltered from '../components/SectionFiltered';
import UserContext from '../contexts/UserContext';

export default function UserId(){
    const { id } = useParams();
    const { page, token } = useContext(UserContext);
    const linkApi = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=${page}&limit=10`;
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        let mounted = true;
        const request =  axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}`, token);
        request.then(response =>{
            if(mounted)setUserInfo(response.data.user)
        }).catch(()=> alert('Erro'))

        return () => mounted = false;
        
    }, [])

    return(
        <SectionFiltered linkApi={linkApi} title={userInfo ? `${userInfo.username}'s posts` : ''} avatar={userInfo ? userInfo.avatar : ''} />
    )
}