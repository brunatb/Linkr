import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';
import axios from 'axios';
import UserContext from '../contexts/UserContext';

export default function UserSearch(){
    const [search, setSearch] = useState('');
    const { userToken } = useContext(UserContext);

    function getResults(){
        if(search !== ''){
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/search?username=${search}`,userToken);
            request.then(response => console.log(response.data)).catch(() => alert(search))
        }
    }

    return(
        <Container>
            <Input placeholder='Search for people and friends' onChange={e =>{
                setSearch(e.target.value);
                getResults();
            }} value={search}></Input>
            <BsSearch className='icon' />
            <Results>
            
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
`;