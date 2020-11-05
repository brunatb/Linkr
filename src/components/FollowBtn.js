import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { AiOutlineTrademark } from 'react-icons/ai';
import { useParams } from 'react-router-dom';


export default function FollowBtn(){
    const { id } = useParams();
    const [text, setText] = useState('');
    const{ userToken } = useContext(UserContext);
    const [enable, setEnable] = useState(false);
    useEffect(() =>{
        let mounted = true;
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows', userToken);
        request.then(response =>{
            if(mounted)verifyFollowers(response.data.users);
        }).catch(() => alert('erro'))

        return () => mounted = false;

    }, [text])

    function verifyFollowers(followers){
        if(followers.length === 0){
            setText('Follow');
        }else{
            let follower = followers.filter(f => f.id == id);
            follower.length !== 0 ? setText('Unfollow') : setText('Follow');
        }
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
        setText('Unfollow');
        setEnable(false);
    }

    function successCaseUnfollow(){
        setText('Follow');
        setEnable(false);
    }

    function errorCase(){
        alert('Não foi possível executar a operação!');
    }

    return(
        <Button onClick={() => {
            postAction();
        }} disabled={enable} text={text}>{text}</Button>
    )
}

const Button = styled.button`
    font-family: 'Lato', sans-serif;
    width: 80px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.text === 'Follow' ? '#FFF' : '#1877F2'};
    background: ${props => props.text === 'Follow' ? '#1877F2' : '#FFF'};
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;
`;