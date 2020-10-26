import React from 'react';
import styled from 'styled-components';

export default function Forms(props){
    return(
        <StyledForms>
            {props.children}
        </StyledForms>
    )
}

const StyledForms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input, button{
        width: 80%;
        height: 50px;
        border-radius: 5px;
        font-size: 22px;
        margin: 10px 0;
    }
    input{
        padding: 10px;
    }

    button{
        background: #1877F2;
        color: #FFF;
        cursor: pointer;
    }
`;
