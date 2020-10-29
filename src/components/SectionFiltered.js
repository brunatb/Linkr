import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import PostsContainer from '../components/PostsContainer';
import Posts from '../components/Posts';
import Header from '../components/Header';
import PagesContainer from '../components/PagesContainer';
import Trending from '../components/Trending';


import UserContext from '../contexts/UserContext';


export default function SectionFiltered({linkApi, title}){
    const { user, userToken } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState (false);

    useEffect(() => {
        const request = axios.get(linkApi, userToken);
        request.then(response => {
            setPosts(response.data.posts);
            setLoad(true);
        })
    }, [userToken])

    return(
        <>
            <Header />
            <PagesContainer>
                <h2>{title}</h2>
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
