import React, { useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import Forms from './Forms';

export default function Trending() {
    const { token, setPage } = useContext(UserContext);
    const [ hashtags, setHashtags ] = useState(null);
    const [search, setSearch] = useState('');
    const history = useHistory();

    useEffect(() => {
        let mounted = true;
        const req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending', token);
        
        req.then( response => {
            if(mounted)setHashtags(response.data.hashtags);
        });

        return () => mounted = false;
    
    }, [token]);

    function hashtagPage(){
        let hashtag = search;
        setPage(0);
        if(hashtag.charAt(0) === '#') hashtag = hashtag.slice(1);
        history.push(`/hashtag/${hashtag}`);
        setSearch('');
    }

    return(
        <Nav>
            <h3>trending</h3>
            <div />
            <form onSubmit={e=>{
                e.preventDefault();
                hashtagPage();
            }}><input type='text' placeholder='Search' onChange={e => {
                setSearch(e.target.value);
            }} value={search} /></form>
            <Tags>
                {hashtags !== null 
                ? hashtags.map((h) => {
                    return(
                        <Link to={`/hashtag/${h.name}`} onClick={() => setPage(0)} key={h.id} >
                            <li>#{h.name}</li>
                        </Link>
                    )}) 
                : 'caregando...'}
            </Tags>
        </Nav>
    );
}

const Nav = styled.nav`
    width: 40%;
    height: 450px;
    background: #171717;
    border-radius: 15px;
    font-weight: 700;

    h3 {
        padding: 15px 20px;
        font-size: 30px;
    }
    & > div {
        border: 1px solid #484848;
    }

    input{
        margin: 15px auto 0 auto;
        border-radius: 5px;
        height: 25px;
        padding: 10px;
    }

    input::placeholder{
        font-size: 16px;
    }

    @media (max-width: 800px){
        display:none;
    }
`;

const Tags = styled.ul`
    font-family: 'Lato';
    padding: 0 20px 20px 20px;

    li {
        margin-top: 15px;
        font-size: 18px;
        color: white;
    }
`;