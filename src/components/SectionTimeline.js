import React from 'react'
import styled from 'styled-components';

import Posts from './Posts';
import PostsContainer from './PostsContainer';
import Publish from './Publish';

export default function SectionTimeline() {
    return(
        <PostsContainer>
            <Publish />
            <Posts />
        </PostsContainer>
    );
}

