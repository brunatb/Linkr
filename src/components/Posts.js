import React from 'react'
import styled from 'styled-components';
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";

export default function Posts() {
    return(
        <Container>
            <Profile>
                <img src='./business+face+people+icon-1320086457520622872.png' />
                <AiOutlineHeart />
            </Profile>
            <Body>
                <h3>Monalice</h3>
                <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</p>
                <A>
                    <div>
                        <h3>Como aplicar o Material UI em um projeto React</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <span>Https://mediium.com....</span>
                    </div>
                    <div>
                        <img src='./business+face+people+icon-1320086457520622872.png' />
                    </div>
                </A>
            </Body>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    border-radius: 15px;
    background: black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    font-family: 'Lato';
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    
    img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 20px;
 }
`;

const Body = styled.div`

    h3 {
        font-family: Lato;
        font-size: 19px;
        padding-bottom: 5px;
    }

    p {
        font-size: 17px;
        color: #B7B7B7;
        margin-bottom: 15px;
    }
`;

const A = styled.div`
    border: 1px solid #4D4D4D;
    border-radius: 10px;
    display: flex;

    h3 {
        font-size: 15px;
        color: #CECECE;
    }
    p {
        font-size: 10px;
        color: #9B9595;
    }
    span {
        font-size: 9px;
        color: #CECECE;
    }

    & > div > img {
        width: 100px;
        border-radius: 0px 12px 13px 0px;
    }

    div {
        padding: 10px;
    }
`;