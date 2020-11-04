import React, { useContext, useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import ReactHashtag from 'react-hashtag';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

import { FaEdit } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import EditContext from '../contexts/EditContext';
import Delete from './Delete';
import Edit from './Edit';


export default function Posts(props) {
    const {avatar, id, username} = props.post.user;
    const {text, linkTitle, linkDescription, link, linkImage, likes } = props.post;
    const { user, userToken, setPage } = useContext(UserContext);

    const { editing, editClick, modified, textEdit } = useContext(EditContext);

    const history = useHistory();
    const [like,setLike] = useState(false);
    const [likeMessage, setLikeMessage] = useState("");
    const [numLikes, setNumLikes] = useState(likes.length);

    useEffect(() => {
        setLike(likes.some(like => like.userId === user.user.id));
    },[]);
    useEffect(() => {
        let text = "";
        if (like) {
            switch (numLikes){
                case 1: text = "Você";
                        break;
                case 2: text = "Você e "+likes[0]['user.username'];
                        break;
                case 3: text = "Você, "+likes[0]['user.username']+" e "+(numLikes - 2)+" pessoa";
                        break;
                default: text = "Você, "+likes[0]['user.username']+" e "+(numLikes - 2)+" pessoas";
            }
        }else{
            switch (numLikes){
                case 0: text = "0 curtidas";
                        break;
                case 1: text = likes[0]['user.username'];
                        break;
                case 2: text = likes[0]['user.username']+" e "+(numLikes - 1)+" pessoa";
                        break;
                default: text = likes[0]['user.username']+" e "+(numLikes - 1)+" pessoas";
            }
        }
        setLikeMessage(text);
    },[numLikes, like]);
    useEffect(() => {
        ReactTooltip.rebuild();
    },[like])
    
    function hashtagPage(hashtag){
        setPage(0);
        hashtag = hashtag.slice(1);
        history.push(`/hashtag/${hashtag}`);
    }
    function likePost(){
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/"+props.post.id+"/like",{},userToken);
        request.then(() => {
            setLike(true);
            setNumLikes(numLikes+1);
        });
    }
    function dislikePost(){
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/"+props.post.id+"/dislike",{},userToken);
        request.then(() => {
            setLike(false);
            setNumLikes(numLikes-1);
        });
    }

    return(
        <Container>
            <Profile>
                <Link   to={(user.user.id == id) ? '/my-posts' : `/user/${id}`}
                        onClick={()=>setPage(0)}>
                        <img src={avatar} /></Link>
                {like ? 
                    <FcLike data-tip={likeMessage} onClick={dislikePost} className="icon"/> : 
                    <AiOutlineHeart data-tip={likeMessage} onClick={likePost} className="icon" />}
                <ReactTooltip />
                <p>{numLikes} likes</p>
            </Profile>
            <Body>
                <header>
                    <Link   to={(user.user.id == id) ? '/my-posts' : `/user/${id}`}
                    onClick={()=>setPage(0)}>
                    <h3>{username}</h3></Link>
                    { (user.user.id == id) 
                        ?<div>
                            <FaEdit onClick={editClick} />
                            <Delete id={props.post.id} />
                        </div>
                        : null
                    }
                    </header>
                    { editing && (user.user.id == id)
                        ? <Edit text={text} id={props.post.id}/>
                        : <p><ReactHashtag onHashtagClick={hashtag => hashtagPage(hashtag)}>{text}</ReactHashtag></p> 
                    }
                    {modified && <p><ReactHashtag onHashtagClick={hashtag => hashtagPage(hashtag)}>{textEdit}</ReactHashtag></p>}
                    <A href={link} target="_blank">
                        <div>
                            <h3>{linkTitle}</h3>
                            <p>{linkDescription}</p>
                            <span>{link}</span>
                        </div>
                        <div>
                            <img src={linkImage ? linkImage : './images/linkr-icon.png'} />
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
    margin-bottom:20px;
    max-width: 60vw;

    span{
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    @media (max-width: 800px){
        max-width:100vw;
    }
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
    .icon{
        font-size:24px;
        cursor: pointer;
    }
`;

const Body = styled.div`
    width: 100%;

    header {
        display: flex;
        justify-content: space-between;
    }

    & h3 {
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
    @media (max-width: 800px){
        overflow:hidden;        
        p{
            word-wrap: break-word;
        }    
    }

`;

const A = styled.a`
    border: 1px solid #4D4D4D;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    
    & > div > h3 {
        font-size: 15px;
    }
    p {
        font-size: 12px;
        color: #9B9595;
    }
    span {
        font-size: 10px;
        color: #CECECE;
        max-width: 50ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    & > div > img {
        width: 100%;
        height: 100%;
        border-radius: 0px 10px 10px 0px;
    }

    div:first-child {
        width: 70%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div:last-child{
        width: 30%;
    }

    @media (max-width: 800px){
        max-width: 100%;
        & > div > h3 {
            word-wrap: break-word;
        }
        p{
            word-wrap: break-word;
        }
        span{
            max-width:30ch;
        }
    }
`;
