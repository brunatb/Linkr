import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import PostsContainer from '../components/PostsContainer';
import Posts from '../components/Posts';
import Header from '../components/Header';
import PagesContainer from '../components/PagesContainer';
import Trending from '../components/Trending';
import FollowBtn from './FollowBtn';

import UserContext from '../contexts/UserContext';


export default function SectionFiltered({linkApi, title, avatar, myLikes}){
    const { token, page, setPage, } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState (false);

    useEffect(() => {
        let mounted = true;
        const request = axios.get(linkApi, token);
        request.then(response => {
            if(mounted){
                let newPosts
                if(response.data.length !== 0 && posts.length !== response.data.posts.length){
                    newPosts = [...posts, ...response.data.posts];
                }else{
                    newPosts=[...posts];
                }

                setPosts(newPosts);
                setLoad(true);
            } 
        })

        return () => mounted = false;

    }, [token, linkApi, page])

    return(
        <>
            <Header />
            <PagesContainer>
                <div className='btn-container'>
                    <span className='user-info'>
                        {avatar ? <img src={avatar} /> : ''}
                        <h2>{title ? title : 'Carregando'}</h2>
                    </span>
                    {title ? (title.charAt(0) === '#' || title === 'my likes' ? '' : <FollowBtn />) : ''}
                </div>
                <div>
                    <PostsContainer>
                        {
                            (posts.length === 0 && !load) ? (<Load><img src="../images/loading.gif" /></Load>) :
                            (posts.length === 0 && load) ? (<Text>Nenhum post encontrado</Text>) : 
                            <InfiniteScroll
                                dataLength={posts.length}
                                next={() => {
                                    setPage(page + 10);
                                }}
                                hasMore={posts.length < 10 ? false : true}>
                                    {(posts.map((post) => <Posts key={post.id} post={post} />))}
                            </InfiniteScroll>
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
