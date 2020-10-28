import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import PagesContainer from '../components/PagesContainer';
import Trending from '../components/Trending';

export default function MyPosts(){
    return(
        <>
            <Header />
            <PagesContainer>
                <h2>my posts</h2>
                <div>
                    <Trending />
                </div>
            </PagesContainer>
        </>
    )
}

