import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { AiOutlineTrademark } from 'react-icons/ai';


export default function FollowBtn({id}){
    const [text, setText] = useState('');
    const{ userToken } = useContext(UserContext);
    const [enable, setEnable] = useState(false);
    useEffect(() =>{
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows', userToken);
        request.then(response =>{
            verifyFollowers(response.data.users);
        }).catch(() => alert('erro'))
    }, [text])

    function verifyFollowers(followers){
        if(followers.length === 0){
            setText('Follow');
        }else{
            let follower = followers.filter(f => f.id === id);
            follower ? setText('Unfollow') : setText('Follow');
        }
        console.log(followers);
    }

    function postAction(){
        setEnable(true);
        if(text === 'Follow'){
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/follow`,{}, userToken);
            request.then(successCaseFollow).catch(errorCase);
        }else{
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/unfollow`,{}, userToken);
            request.then(successCaseUnfollow).catch(errorCase);
        }
    }

    function successCaseFollow(){
        alert('Seguiu');
    }

    function successCaseUnfollow(){
        alert('Deixou de seguir');
    }

    function errorCase(){
        alert('Erro');
    }

    return(
        <Button onClick={() => {
            postAction();
        }} disabled={enable}>{text}</Button>
    )
}

const Button = styled.button`
    font-family: 'Lato', sans-serif;
    width: 80px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
    background: #1877F2;
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;
`;