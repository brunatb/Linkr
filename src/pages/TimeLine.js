import React from 'react'
import styled from 'styled-components';

import Header from '../components/Header';
import Trending from '../components/Trending';
import SectionTimeline from '../components/SectionTimeline';

export default function TimeLine(){
    return(
        <>
            <Header />
            <Container>
                <h2>timeline</h2>
                <div>
                    <SectionTimeline />
                    <Trending />
                </div>
            </Container>
        </>
    );
}

const Container = styled.section`
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 0 10%;
    margin-top: 150px;

    h2 {
        font-size: 40px;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;
    }
`;