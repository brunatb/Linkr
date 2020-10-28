import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';

import UserContext from '../contexts/UserContext';

export default function Trending() {
    const { userToken } = useContext(UserContext);
    const [ hashtags, setHashtags ] = useState({});

    useEffect(() => {
        const req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending',userToken);
        
        req.then( response => {
            setHashtags(response.data);
        });
    }, [userToken]);

    console.log(hashtags);
    return(
        <Nav>
            <h3>trending</h3>
            <Tags>
                <li>#javascript</li>
                <li>#javascript</li>
                <li>#javascript</li>
                <li>#javascript</li>
                <li>#javascript</li>
                <li>#javascript</li>
                <li>#javascript</li>
                <li>#javascript</li>
                <li>#javascript</li>
                <li>#javascript</li>
            </Tags>
        </Nav>
    );
}

// {hashtags.map(h => <li>#{h.name}</li>)}

const Nav = styled.nav`
    width: 40%;
    background: #171717;
    border-radius: 15px;
    font-weight: 700;

    h3 {
        padding: 15px 20px;
        font-size: 30px;
    }
    div {
        border: 1px solid #484848;
    }
`;

const Tags = styled.ul`
    font-family: 'Lato';
    margin-left: 20px;
    margin-bottom: 20px;

    li {
        margin-top: 15px;
        font-size: 18px;
    }
`;