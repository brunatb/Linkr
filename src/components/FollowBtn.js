import React from 'react';
import styled from 'styled-components';


export default function FollowBtn(){
    return(
        <Button>Follow</Button>
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