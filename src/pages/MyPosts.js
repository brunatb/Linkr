import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import PagesContainer from '../components/PagesContainer';
import PostsContainer from '../components/PostsContainer';
import Trending from '../components/Trending';
import Posts from '../components/Posts';

import UserContext from '../contexts/UserContext';

export default function MyPosts(){
    const { user, userToken } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState (false);

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${user.user.id}/posts?offset=0&limit=10`, userToken);
        request.then(response => {
            setPosts(response.data.posts);
            setLoad(true);
        })
    }, [userToken])

    return(
        <>
            <Header />
            <PagesContainer>
                <h2>my posts</h2>
                <div>
                    <PostsContainer>
                        {
                            (!posts && !load) ? (<Load><img src="./images/loading.gif" /></Load>) :
                            (!posts && load) ? (<Text>Nenhum post encontrado</Text>) : 
                            (posts.map((post) => <Posts key={post.id} post={post} />))
                        }
                    </PostsContainer>
                    <Trending />
                </div>
            </PagesContainer>
        </>
    )
}

const Load = styled.div`
    display:flex;
    justify-content:center;

    img{
        width:60px;
        border-radius:10px;
    }
`;

const Text = styled.p`
    color:#FFF;
    text-align:center;
    font-size:20px;
`;
