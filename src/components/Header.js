import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Menu from './Menu';
import UserContext from '../contexts/UserContext';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const { user } = useContext(UserContext);
    return (
        <Top>
            <p>linkr</p>
            <Profile>
                {!openMenu ? <AiOutlineDown className='icon' onClick={() => setOpenMenu(true)} /> : <AiOutlineUp className='icon' onClick={() => setOpenMenu(false)} />}
                <img src={user.user.avatar} />
                {!openMenu ? "" : <Menu />}
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
    background-color: #151515;
    color: #fff;
    font-family: 'Passion One';

    & > p{
        font-size: 50px;
        font-weight: 700;
    }
`;

const Profile = styled.div`
    width: 90px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 20px;
    position: relative;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .icon{
        cursor: pointer;
    }
`;