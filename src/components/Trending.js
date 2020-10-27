import React from 'react'
import styled from 'styled-components';

export default function Trending() {
    return(
        <Nav>
            <h3>trending</h3>
            <div/>
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