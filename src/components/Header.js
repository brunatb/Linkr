import React from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from "react-icons/ai";

export default function Header() {
    return (
        <Top>
            <p>linkr</p>
            <Profile>
                <AiOutlineDown />
                <img src='./business+face+people+icon-1320086457520622872.png' />
            </Profile>
        </Top>
    );
}

const Top = styled.header`
    width: 100%;
    height: 75px;
    position: fixed;
    top: 0px;
    left: opx;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: #fff;
    font-family: 'Passion One';

    p {
        font-size: 50px;
        font-weight: 700;
    }
`;

const Profile = styled.div`
    width: 90px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;


    img {
        width: 60px;
        border-radius: 50%;
    }
`;