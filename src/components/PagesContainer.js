import React from 'react';
import styled from 'styled-components';

export default function PagesContainer(props){

    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 0 10%;
    margin-top: 150px;

    h2 {
        font-size: 40px;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;
    }
`;