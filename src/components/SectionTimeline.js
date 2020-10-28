import React,{ useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Posts from './Posts';
import PostsContainer from './PostsContainer';
import Publish from './Publish';
import UserContext from '../contexts/UserContext';

export default function SectionTimeline() {
    const { userToken } = useContext(UserContext);
    const [posts, setPosts] = useState ([]);
    
    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=0&limit=10",userToken);
        request.then(response => setPosts(response.data.posts));
    },[userToken]);
    
    return(
        <PostsContainer>
            <Publish />            
            {posts.length === 0 ? 
                (<Load><img src="./images/loading.gif"></img></Load>) : 
                (posts.map(post => <Posts post={post} />))
            }            
        </PostsContainer>
    );
}

const Load = styled.div`
    display:flex;
    justify-content:center;

    img{
        width:60px;
        border-radius:10px;
    }
`;
