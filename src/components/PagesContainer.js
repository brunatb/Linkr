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
    margin: 150px 0px;

    .btn-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            width: 50px;
            height: 50px;
            border-radius: 100%;
            margin: 0 10px 0 0;
        }
    }
    .user-info{
        display: flex;
    }
    h2 {
        font-size: 40px;
    }
    & > div {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }
    @media (max-width: 800px){
        padding: 0;

        h2{
            margin-left: 10px;
        }
    }
`;