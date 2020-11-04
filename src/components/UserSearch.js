import React from 'react';
import styled from 'styled-components';
import {BsSearch} from 'react-icons/bs';

export default function UserSearch(){

    return(
        <Container>
            <Input placeholder='Search for people and friends'></Input>
            <BsSearch className='icon' />
        </Container>
    )
}

const Container = styled.div`
    width: 40%;
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