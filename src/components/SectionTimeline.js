import React,{ useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import Posts from './Posts';
import PostsContainer from './PostsContainer';
import Publish from './Publish';
import UserContext from '../contexts/UserContext';

export default function SectionTimeline() {
    const { token, page, setPage } = useContext(UserContext);
    const [posts, setPosts] = useState ([]);
    const [load, setLoad] = useState (false);
    const [follows, setFollows] = useState(0);
    
    useEffect(() => {
        const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows', token);
        request.then(response => setFollows(response.data.users.length));     
    },[]);

    useEffect(() => getPosts(),[page]);

    useEffect(() => {
        const reload = setInterval(() => getPosts() ,15000);
        return () => clearInterval(reload);
    }, [token, page]);

    function getPosts(){
        let mounted = true;
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/following/posts?offset=${page}&limit=10`, token);
        request.then(response => {
            if(mounted){
                let newPosts = [...posts, ...response.data.posts];
                setPosts(newPosts);
                setLoad (true);
            }
        }).catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        return () => mounted = false;
    }

    return(
        <PostsContainer>
            <Publish setPosts={setPosts} />            
            {(posts.length === 0 && !load) ? 
                (<Load><img src="./images/loading.gif"></img></Load>) : 
                ((posts.length === 0 && load && follows!==0) ? 
                    (<Text>Nenhum post encontrado</Text>) : 
                    ((posts.length === 0 && load && follows===0) ? 
                        (<Text>Você não segue ninguém ainda, procure por perfis na busca</Text>) : 
                        (<InfiniteScroll
                            dataLength={posts.length}
                            next={() => {
                                setPage(page + 10);
                            }}
                            hasMore={true}>
                                {(posts.map((post) => <Posts key={post.id} post={post} />))}
                        </InfiniteScroll>
                        )
                    )
                )
            }                    
        </PostsContainer>
    );
}

const Load = styled.div`
    display: flex;
    justify-content: center;

    img{
        width: 60px;
        border-radius: 10px;
    }
`;

const Text = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 20px;
`;
