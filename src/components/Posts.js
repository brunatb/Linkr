import React from 'react'
import styled from 'styled-components';
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Posts(props) {
    const {avatar, id, username} = props.post.user;
    const {text, linkTitle, linkDescription, link, linkImage} = props.post;

    return(
        <Container>
            <Profile>
                <Link to={`/user/${id}`}><img src={avatar} /></Link>
                <AiOutlineHeart />
            </Profile>
            <Body>
            <Link to={`/user/${id}`}><h3>{username}</h3></Link>
                <p>{text}</p>
                <A>
                    <div>
                        <h3>{linkTitle}</h3>
                        <p>{linkDescription}</p>
                        <span>{link}</span>
                    </div>
                    <div>
                        <img src={linkImage} />
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
    align-items: center;
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
        color: #CECECE;
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
    width: 100%;

    h3 {
        font-size: 15px;
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