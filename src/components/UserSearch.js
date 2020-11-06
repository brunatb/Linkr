import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';
import { Link } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

export default function UserSearch(){
    const [results, setResults] = useState([]);
    const { user, token } = useContext(UserContext);

    function getResults(search){
        if(search.length > 2){
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/search?username=${search}`,token);
            request.then(response =>{
                let following = response.data.users.filter(r => r.isFollowingLoggedUser);
                let notFollowing = response.data.users.filter(r => !r.isFollowingLoggedUser);
                setResults([...following, ...notFollowing]);
            }).catch(() => alert('Erro'))
        }else{
            setResults([]);
        }
    }

    return(
        <Container border={results.length}>
            <DebounceInput 
                minLength={3}
                debounceTimeout={300}
                placeholder= 'Search for people and friends'
                onChange={e =>{
                    getResults(e.target.value);
                }} />
            <BsSearch className='icon' />
            <Results border={results.length}>
                {results.length > 0 ? results.map(r => {
                    return(
                        <Link key={r.id} to={r.id == user.user.id ? '/my-posts' : `/user/${r.id}`}>
                            <img src={r.avatar} />
                            <p>{r.username}</p>
                            {r.isFollowingLoggedUser ? <ul><li>following</li></ul> : ''}
                        </Link>
                    ) 
                }) : ''}
            </Results>
        </Container>
    )
}

const Container = styled.div`
    width: 40vw;
    position: relative;
    font-family: 'Lato', sans-serif;

    .icon{
        position: absolute;
        top: 28%;
        right: 2%;
        color: grey;
    }

    input{
        width: 100%;
        font-size: 16px;
        padding: 8px;
        border-radius: ${props => props.border == 0 ? '5px' : '5px 5px 0 0'};
    }
    @media (max-width:800px){
        .icon{
            display:none;
        }
    }
`;

const Results = styled.div`
    position: absolute;
    top: 98%;
    right: 0;
    left: 0;
    background: #E7E7E7;
    ${props => props.border == 0 ? '' : 'padding: 10px 15px; border-radius: 0 0 8px 8px; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);'};
    
    a{
        display: flex;
        align-items: center;
        padding: 5px 0;
    }

    img{
        width: 35px;
        height: 35px;
        border-radius: 100%;
        margin: 0 5px 0 0;
    }

    p{
        color: #515151;
        font-size: 16px;
    }

    li{
        margin: 0 0 0 10px;
        font-size: 14px;
        color: #C5C5C5;
    }
    
    li::before{
        content: "•";
        color: #C5C5C5;
        margin: 0 2px 0 0;
    }
   
`;