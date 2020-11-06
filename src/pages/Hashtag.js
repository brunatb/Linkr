import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';

import SectionFiltered from '../components/SectionFiltered';
import UserContext from '../contexts/UserContext';

export default function Hashtag(){
    const hashtag = useParams();
    const { page } = useContext(UserContext);
    const linkApi = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/${hashtag.hashtag}/posts?offset=${page}&limit=10`;
    const title = `#${hashtag.hashtag}`;

    return(
        <SectionFiltered linkApi={linkApi} title={title} />
    )
}
