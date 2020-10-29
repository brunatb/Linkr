import React,{ useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import Posts from './Posts';
import PostsContainer from './PostsContainer';
import Publish from './Publish';
import UserContext from '../contexts/UserContext';

export default function SectionTimeline() {
    const { userToken } = useContext(UserContext);
    const [posts, setPosts] = useState ([]);
    const [load, setLoad] = useState (false);
    const [page, setPage] = useState(1);
    const [moreLoad, setMoreLoad] = useState (10);
    
    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=${page}&limit=${moreLoad}`, userToken);
        request.then(response => {
            setPosts(response.data.posts);
            setLoad (true);
        }).catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
    },[userToken, page, moreLoad]);
    return(
        <PostsContainer>
            <Publish setPosts={setPosts} />            
            {(posts.length === 0 && !load) ? 
                (<Load><img src="./images/loading.gif"></img></Load>) : 
                ((posts.length === 0 && load) ? 
                    (<Text>Nenhum post encontrado</Text>) : 
                    <InfiniteScroll
                        dataLength={posts.length}
                        next={() => {
                            setPage(page + 1);
                            setMoreLoad(moreLoad + 10)
                        }}
                        hasMore={true}>
                            {(posts.map((post) => <Posts key={post.id} post={post} />))}
                    </InfiniteScroll>
                )
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

const Text = styled.p`
    color:#FFF;
    text-align:center;
    font-size:20px;
`;
