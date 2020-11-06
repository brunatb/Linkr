import React from 'react';
import styled from 'styled-components';

export default function PostsContainer(props){
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 30px;
    @media (max-width: 800px){
        margin: 0;
    }
`;