import React from 'react';
import { useParams } from 'react-router-dom';

import SectionFiltered from '../components/SectionFiltered';



export default function Hashtag(){
    const hashtag = useParams();
    const linkApi = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag.hashtag}/posts?offset=0&limit=2`;
    const title = `#${hashtag.hashtag}`;

    return(
        <SectionFiltered linkApi={linkApi} title={title} />
    )
}
 