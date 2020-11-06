import React, { useContext } from 'react';

import Header from '../components/Header';
import Trending from '../components/Trending';
import SectionTimeline from '../components/SectionTimeline';
import UserContext from '../contexts/UserContext';
import PagesContainer from '../components/PagesContainer';

export default function TimeLine(){
    const {user} = useContext(UserContext);
    return(
        <>
            <Header />
            <PagesContainer>
                <h2>timeline</h2>
                <div>
                    <SectionTimeline />
                    <Trending />
                </div>
            </PagesContainer>
        </>
    );
}

