import React from 'react'
import styled from 'styled-components';

import Posts from './Posts';
import Publish from './Publish';

export default function SectionTimeline() {
    return(
        <Container>
            <Publish />
            <Posts />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 30px;
`;