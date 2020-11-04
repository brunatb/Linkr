import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';
import axios from 'axios';
import UserContext from '../contexts/UserContext';

export default function UserSearch(){
    const [results, setResults] = useState([]);
    const { userToken } = useContext(UserContext);

    function getResults(search){
        if(search.length > 2){
            console.log(search);
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/search?username=${search}`,userToken);
            request.then(response =>{
                setResults([...response.data.users]);
                console.log(results);
            }).catch(() => alert(search))
        }else{
            setResults([]);
        }
    }

    return(
        <Container>
            <Input placeholder='Search for people and friends' onChange={e =>{
                getResults(e.target.value);
            }}></Input>
            <BsSearch className='icon' />
            <Results border={results.length}>
                {results.length > 0 ? results.map(r => {
                    return(
                        <div key={r.id}>
                            <img src={r.avatar} />
                            <p>{r.username}</p>
                        </div>
                    ) 
                }) : ''}
            </Results>
        </Container>
    )
}

const Container = styled.div`
    width: 40vw;
    position: relative;

    .icon{
        position: absolute;
        top: 28%;
        right: 2%;
        color: grey;
    }
`;

const Input = styled.input`
    width: 100%;
    font-size: 16px;
    padding: 8px;
    border-radius: 5px;
`;

const Results = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #E7E7E7;
    ${props => props.border == 0 ? '' : 'border-radius: 0 0 8px 8px'};

    div{
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
        font-family: 'Lato', sans-serif;
        color: #515151;
        font-size: 16px;
    }
`;