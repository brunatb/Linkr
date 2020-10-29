import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components';
import ReactHashtag from 'react-hashtag';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function Posts(props) {
    const {avatar, id, username} = props.post.user;
    const {text, linkTitle, linkDescription, link, linkImage, likes } = props.post;
    const { user, userToken } = useContext(UserContext);
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
                <Link to={(user.user.id == id) ? '/my-posts' : `/user/${id}`}><img src={avatar} /></Link>
                {like ? 
                    <FcLike data-tip={likeMessage} onClick={dislikePost} className="icon"/> : 
                    <AiOutlineHeart data-tip={likeMessage} onClick={likePost} className="icon" />}
                <ReactTooltip />
            </Profile>
            <Body>
            <Link to={(user.user.id == id) ? '/my-posts' : `/user/${id}`}><h3>{username}</h3></Link>
                <p><ReactHashtag onHashtagClick={hashtag => hashtagPage(hashtag)}>{text}</ReactHashtag></p>
                <A href={link} target="_blank">
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
    margin-bottom:20px;

   span{
       color: white;
       font-weight: bold;
       cursor: pointer;
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

const A = styled.a`
    border: 1px solid #4D4D4D;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 15px;
    }
    p {
        font-size: 12px;
        color: #9B9595;
    }
    span {
        font-size: 10px;
        color: #CECECE;
    }

    & > div > img {
        width: 100%;
        height: 100%;
        border-radius: 0px 10px 10px 0px;
    }

    div:first-child {
        width: 70%;
        padding: 10px;
    }

    div:last-child{
        width: 30%;
    }
`;