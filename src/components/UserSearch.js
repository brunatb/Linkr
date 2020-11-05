import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';
import axios from 'axios';
import UserContext from '../contexts/UserContext';
import { DebounceInput } from 'react-debounce-input';

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

    input{
        width: 100%;
        font-size: 16px;
        padding: 8px;
        border-radius: ${props => props.border == 0 ? '5px' : '5px 5px 0 0'};
    }
`;

const Results = styled.div`
    position: absolute;
    top: 98%;
    right: 0;
    left: 0;
    background: #E7E7E7;
    ${props => props.border == 0 ? '' : 'padding: 10px 15px; border-radius: 0 0 8px 8px; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);'};
    
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